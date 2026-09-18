const Session = require('../models/Session');
const { createSessionEvent } = require('./calendarService');

// Creates the Session document first (always succeeds independently), then
// best-effort attempts the calendar event. A calendar failure never blocks
// the session from existing — meetLink just stays empty (fallback shown on frontend).
async function createSessionWithCalendar({
  type, title, description, startTime, durationMinutes, capacity, hostId, attendeeEmails,
}) {
  const session = await Session.create({
    type, title, description, startTime, durationMinutes, capacity, hostId,
    attendeeIds: [hostId],
  });

  try {
    const { eventId, meetLink } = await createSessionEvent({
      title, description, startTime, durationMins: durationMinutes, attendeeEmails,
    });
    session.googleEventId = eventId;
    session.meetLink = meetLink;
    await session.save();
  } catch (err) {
    console.error('Calendar event creation failed:', err.message);
    // session already saved above, meetLink stays empty
  }

  return session;
}

module.exports = { createSessionWithCalendar };
