const mongoose = require('mongoose');

const creditTransactionSchema = new mongoose.Schema(
    {
      fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // the tutor, whose balance goes up
      },
      tutoringRequestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TutoringRequest',
        required: true, // traces the transfer back to the confirmation that authorized it
      },
      amount: {
        type: Number,
        default: 1,
        required: true,
      },
    },
    { timestamps: true } // createdAt doubles as "when this transfer was recorded"
);

// Supports a future "my transaction history" lookup for either side of a
// transfer without a full collection scan.
creditTransactionSchema.index({ fromUserId: 1, createdAt: -1 });
creditTransactionSchema.index({ toUserId: 1, createdAt: -1 });
creditTransactionSchema.index({ tutoringRequestId: 1 });

// This collection is insert-only, it's an audit trail. Block updates at the
// schema level instead of relying purely on developer discipline: any
// findOneAndUpdate/updateOne/updateMany call against this model throws
// instead of silently mutating a record that's supposed to be permanent.
function blockUpdates() {
  throw new Error('CreditTransaction records are insert-only and cannot be updated.');
}
creditTransactionSchema.pre('findOneAndUpdate', blockUpdates);
creditTransactionSchema.pre('updateOne', blockUpdates);
creditTransactionSchema.pre('updateMany', blockUpdates);

// The hooks above only catch query-style methods. A fetched document that
// gets mutated in memory and saved (`doc.amount = 999; await doc.save()`)
// bypasses all of them, since .save() runs through a separate middleware
// chain. This closes that gap: any save on an existing (non-new) document
// is rejected, only the initial insert is allowed through.
creditTransactionSchema.pre('save', function (next) {
  if (!this.isNew) {
    return next(new Error('CreditTransaction records are insert-only and cannot be updated.'));
  }
  next();
});

// Deletions would also undermine an audit trail, block those too.
creditTransactionSchema.pre(['deleteOne', 'deleteMany'], blockUpdates);

module.exports = mongoose.model('CreditTransaction', creditTransactionSchema);

/*
This collection is insert-only. Never update or delete an existing entry, it's
an audit trail for tracing a disputed transfer later, not a mutable record.
The pre-hooks above enforce this at the schema level as a safety net.

Write exactly one entry per confirmed session, right alongside the atomic
balance update in the same confirmation flow (FR3.9). In practice this is
handled by TutoringRequest.confirmAndTransfer(requestId), see TutoringRequest.js,
which performs the balance update and this insert together:

  const transferred = await User.findOneAndUpdate(
    { _id: learnerId, creditBalance: { $gte: 1 } },
    { $inc: { creditBalance: -1 } }
  );
  if (transferred) {
    await User.findOneAndUpdate({ _id: tutorId }, { $inc: { creditBalance: 1 } });
    await CreditTransaction.create({
      fromUserId: learnerId,
      toUserId: tutorId,
      tutoringRequestId: requestId,
      amount: 1,
    });
  } else {
    await TutoringRequest.updateOne({ _id: requestId }, { status: 'failed_transfer' });
    // no ledger entry in this case, nothing actually transferred
  }
*/
