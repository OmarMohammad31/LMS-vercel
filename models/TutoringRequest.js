const mongoose = require('mongoose');

const tutoringRequestSchema = new mongoose.Schema(
    {
      learnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['open', 'accepted', 'confirmed', 'expired', 'failed_transfer'],
        default: 'open',
        required: true,
      },
      tutorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // set once a tutor accepts
      },
      sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session', // set once the 2-person session is created
      },
      learnerConfirmed: {
        type: Boolean,
        default: false,
      },
      tutorConfirmed: {
        type: Boolean,
        default: false,
      },
      confirmationDeadline: {
        type: Date,
      },
    },
    { timestamps: true }
);

// GET /tutoring-requests filters on status.
tutoringRequestSchema.index({ status: 1 });

// The one-open-request-per-learner rule (FR3.3/FR3.4) queries by learnerId + status
// together, so a compound index here matters more than a single-field one would.
tutoringRequestSchema.index({ learnerId: 1, status: 1 });

// Enforces FR3.3 at the database level: a learner can never have more than
// one request in an unresolved state ('open' or 'accepted') at once. This is
// a partial unique index, it only applies to documents matching the filter
// expression, so a learner can freely have many 'confirmed'/'expired'/
// 'failed_transfer' requests in their history, just never two unresolved
// ones at the same time. This closes the race condition that a plain
// check-then-create in application code can't fully prevent under
// concurrent requests.
tutoringRequestSchema.index(
  { learnerId: 1 },
  {
    unique: true,
    partialFilterExpression: { status: { $in: ['open', 'accepted'] } },
  }
);

// Encapsulates FR3.9: the status flip and the credit transfer must happen
// atomically together so a duplicate/retried confirm call can't trigger a
// second payout. Wrapped in a MongoDB transaction: without it, a crash or
// network blip between the learner's deduction and the tutor's credit could
// leave the ledger in a half-written state. This requires a replica-set
// deployment (Atlas provisions this by default, including the free tier) and
// will throw on a standalone local mongod.
tutoringRequestSchema.statics.confirmAndTransfer = async function (requestId) {
  const User = mongoose.model('User');
  const CreditTransaction = mongoose.model('CreditTransaction');

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updated = await this.findOneAndUpdate(
      {
        _id: requestId,
        status: { $ne: 'confirmed' },
        learnerConfirmed: true,
        tutorConfirmed: true,
      },
      { $set: { status: 'confirmed' } },
      { new: true, session }
    );

    if (!updated) {
      // not both confirmed yet, or already confirmed by a prior call.
      // Nothing was actually changed that needs rolling back, but abort
      // cleanly anyway to release the session properly.
      await session.abortTransaction();
      return null;
    }

    const transferred = await User.findOneAndUpdate(
      { _id: updated.learnerId, creditBalance: { $gte: 1 } },
      { $inc: { creditBalance: -1 } },
      { session }
    );

    if (!transferred) {
      // Balance dropped below 1 between confirmation and transfer. Abort the
      // transaction (undoes the status flip to 'confirmed' above), then
      // record the failure as a separate, ordinary write afterward.
      throw new Error('INSUFFICIENT_BALANCE');
    }

    await User.findOneAndUpdate(
      { _id: updated.tutorId },
      { $inc: { creditBalance: 1 } },
      { session }
    );

    await CreditTransaction.create(
      [
        {
          fromUserId: updated.learnerId,
          toUserId: updated.tutorId,
          tutoringRequestId: updated._id,
          amount: 1,
        },
      ],
      { session } // array + options form is required for .create() with a session
    );

    await session.commitTransaction();
    return updated;
  } catch (err) {
    await session.abortTransaction();

    if (err.message === 'INSUFFICIENT_BALANCE') {
      return this.findOneAndUpdate(
        { _id: requestId },
        { status: 'failed_transfer' },
        { new: true }
      );
    }
    throw err;
  } finally {
    await session.endSession();
  }
};

module.exports = mongoose.model('TutoringRequest', tutoringRequestSchema);

/*
Reminder 1, creating a request (FR3.2/FR3.3/FR3.4): check the learner's balance
before creating, and let the partial unique index above be the real enforcement
of "no second open/accepted request", not just an app-level pre-check:

  const learner = await User.findOne({ _id: learnerId, creditBalance: { $gte: 1 } });
  if (!learner) {
    // reject, insufficient balance
  }

  try {
    const request = await TutoringRequest.create({ learnerId, topic });
  } catch (err) {
    if (err.code === 11000) {
      // duplicate key on the partial unique index, learner already has an
      // open or accepted request, reject with that message
    } else {
      throw err;
    }
  }

Reminder 2, confirming a session (FR3.9): call the static instead of
duplicating the atomic flow inline:

  const result = await TutoringRequest.confirmAndTransfer(requestId);
  if (!result) {
    // not both parties confirmed yet, or this was a duplicate confirm call
  }
*/
