const TutoringRequest = require('../models/TutoringRequest');
const Session = require('../models/Session');

const CONFIRMATION_WINDOW_HOURS = 48;
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // every 5 minutes

// Once the linked session's end time has passed, set a
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

// If the confirmation window passed without both sides confirming, mark expired.
async function expireStaleRequests() {
  await TutoringRequest.updateMany(
    { status: 'accepted', confirmationDeadline: { $lt: new Date() } },
    { $set: { status: 'expired' } }
  );
}

async function runOnce() {
  await markEligibleForConfirmation();
  await expireStaleRequests();
}

function startScheduler() {
  setInterval(async () => {
    try {
      await runOnce();
    } catch (err) {
      console.error('Scheduler error:', err.message);
    }
  }, CHECK_INTERVAL_MS);
}

module.exports = { startScheduler, runOnce };
