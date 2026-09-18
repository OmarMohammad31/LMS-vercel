const TutoringRequest = require('../models/TutoringRequest');
const Session = require('../models/Session');

const CONFIRMATION_WINDOW_HOURS = 48;
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // every 5 minutes

// FR3.7/3.8: once the linked session's end time has passed, set a
// confirmationDeadline so the frontend knows to prompt both sides.
async function markEligibleForConfirmation() {
  const accepted = await TutoringRequest.find({ status: 'accepted', confirmationDeadline: null })
    .populate('sessionId');

  for (const request of accepted) {
    const session = request.sessionId;
    if (!session) continue;
    const endTime = new Date(session.startTime.getTime() + session.durationMinutes * 60000);
    if (new Date() > endTime) {
      request.confirmationDeadline = new Date(Date.now() + CONFIRMATION_WINDOW_HOURS * 60 * 60 * 1000);
      await request.save();
    }
  }
}

// FR3.10-adjacent: if the confirmation window passed without both sides
// confirming, mark expired. No balance change (nothing was ever deducted).
async function expireStaleRequests() {
  await TutoringRequest.updateMany(
    { status: 'accepted', confirmationDeadline: { $lt: new Date() } },
    { $set: { status: 'expired' } }
  );
}

function startScheduler() {
  setInterval(async () => {
    try {
      await markEligibleForConfirmation();
      await expireStaleRequests();
    } catch (err) {
      console.error('Scheduler error:', err.message);
    }
  }, CHECK_INTERVAL_MS);
}

module.exports = { startScheduler };
