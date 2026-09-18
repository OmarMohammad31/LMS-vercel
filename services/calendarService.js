const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Creates a calendar event + auto-generated Meet link. Callers must wrap
// this in try/catch — a failure here must never block a session/booking save.
async function createSessionEvent({ title, description, startTime, durationMins, attendeeEmails }) {
  const endTime = new Date(new Date(startTime).getTime() + durationMins * 60000);

  const res = await calendar.events.insert({
    calendarId: 'primary',
    resource: {
      summary: title,
      description,
      start: { dateTime: new Date(startTime).toISOString() },
      end: { dateTime: endTime.toISOString() },
      attendees: attendeeEmails.map((email) => ({ email })),
      conferenceData: { createRequest: { requestId: `${Date.now()}-${Math.random()}` } },
    },
    conferenceDataVersion: 1, // required or no Meet link
    sendUpdates: 'all', // required or no invite emails
  });

  return { eventId: res.data.id, meetLink: res.data.hangoutLink };
}

// Adds one attendee to an existing event (e.g. a student booking a session).
async function addAttendeeToEvent(eventId, newAttendeeEmail) {
  const existing = await calendar.events.get({ calendarId: 'primary', eventId });
  const attendees = existing.data.attendees || [];
  attendees.push({ email: newAttendeeEmail });

  await calendar.events.patch({
    calendarId: 'primary',
    eventId,
    resource: { attendees },
    sendUpdates: 'all',
  });
}

module.exports = { createSessionEvent, addAttendeeToEvent };
