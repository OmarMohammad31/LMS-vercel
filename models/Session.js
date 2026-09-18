const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
    {
      type: {
        type: String,
        enum: ['LiveClass', 'PeerTutoring'],
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      // topic intentionally lives on TutoringRequest only, not here.
      // For PeerTutoring sessions, the linked TutoringRequest (via
      // TutoringRequest.sessionId) is the single source of truth for topic,
      // this avoids the two copies drifting apart. At session-creation time
      // (FR3.5), the tutoring request document is already in hand, so
      // title/description can be built directly from it without needing a
      // duplicate topic field here.
      startTime: {
        type: Date,
        required: true,
      },
      durationMinutes: {
        type: Number,
        required: true,
        min: 1,
        max: 60 //Google Meet's 60-minute free-tier cutoff
      },
      capacity: {
        type: Number,
        required: true,
        min: [1, 'Capacity must be at least 1'],
        // Pure sanity bound against bad input, not a scalability fix. At this
        // project's scale the attendeeIds array is nowhere near a real
        // document-size or array-growth concern.
        max: [100, 'Capacity cannot exceed 100'],
      },
      hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // the instructor for LiveClass sessions, or the tutor for PeerTutoring
        required: true,
      },
      attendeeIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: [],
      },
      // googleEventId links this document to the actual Google Calendar event.
      // Needed later to add attendees to an existing event (addAttendeeToEvent),
      // not just at creation time. Optional: a session can exist even if the
      // Calendar API call failed, per the fallback behavior. sparse+unique so
      // multiple sessions can each have no googleEventId, but no two sessions
      // can ever point at the same one.
      googleEventId: {
        type: String,
        unique: true,
        sparse: true,
      },
      meetLink: {
        type: String,
      },
      status: {
        type: String,
        enum: ['scheduled', 'completed'],
        default: 'scheduled',
      },
    },
    { timestamps: true }
);

// GET /sessions filters on status and orders/filters by startTime together
// (FR1.2, "upcoming open sessions"), so a compound index matches the actual
// query shape rather than only covering half of it.
sessionSchema.index({ status: 1, startTime: 1 });

// Convenience virtual, not persisted, just derived on read.
sessionSchema.virtual('isFull').get(function () {
  return this.attendeeIds.length >= this.capacity;
});

sessionSchema.set('toJSON', { virtuals: true });
sessionSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Session', sessionSchema);

/*
Reminder for the booking endpoint (FR1.3/FR1.4/FR1.5): never read attendeeIds,
check its length in code, then push and save. Use one atomic conditional update
that checks both "not already booked" and "capacity not exceeded" in the same
filter, e.g.:

  const updated = await Session.findOneAndUpdate(
    {
      _id: sessionId,
      attendeeIds: { $ne: studentId },       // not already booked (FR1.5)
      $expr: { $lt: [{ $size: '$attendeeIds' }, '$capacity'] }, // capacity check (FR1.4)
    },
    { $push: { attendeeIds: studentId } },
    { new: true }
  );
  if (!updated) {
    // either already booked or session is full, reject with the appropriate message
  }
*/
