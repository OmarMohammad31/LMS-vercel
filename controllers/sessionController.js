const Session = require('../models/Session');
const { createSessionWithCalendar } = require('../services/sessionService');
const { addAttendeeToEvent } = require('../services/calendarService');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

// POST /sessions — instructor only (FR1.1, FR2.1-2.2)
const createSession = asyncHandler(async (req, res) => {
  const { title, description, startTime, durationMinutes, capacity } = req.body;
  if (!title || !startTime || !durationMinutes || !capacity) {
    throw new AppError('Missing required fields', 400);
  }

  const session = await createSessionWithCalendar({
    type: 'LiveClass',
    title,
    description,
    startTime,
    durationMinutes,
    capacity,
    hostId: req.user._id,
    attendeeEmails: [req.user.email],
  });

  res.status(201).json(session);
});

// GET /sessions — list upcoming scheduled sessions (FR1.2)
const listSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find({ status: 'scheduled' }).sort({ startTime: 1 });
  res.json(sessions);
});

// POST /sessions/:id/book (FR1.3-1.5)
const bookSession = asyncHandler(async (req, res) => {
  const studentId = req.user._id;

  const updated = await Session.findOneAndUpdate(
      {
        _id: req.params.id,
        attendeeIds: { $ne: studentId },
        $expr: { $lt: [{ $size: '$attendeeIds' }, '$capacity'] },
      },
      { $push: { attendeeIds: studentId } },
      { new: true }
  );

  if (!updated) throw new AppError('Session is full or already booked', 409);

  if (updated.googleEventId) {
    try {
      await addAttendeeToEvent(updated.googleEventId, req.user.email);
    } catch (err) {
      console.error('Failed to add attendee to calendar event:', err.message);
    }
  }

  res.json(updated);
});

// GET /sessions/:id/roster — host only (FR1.6), now includes each
// attendee's role within the session so the UI can label them clearly.
const getRoster = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.id).populate('attendeeIds', 'name email');
  if (!session) throw new AppError('Session not found', 404);
  if (String(session.hostId) !== String(req.user._id)) {
    throw new AppError('Only the host can view the roster', 403);
  }

  const hostRole = session.type === 'LiveClass' ? 'Instructor' : 'Peer Tutor';
  const attendeeRole = session.type === 'LiveClass' ? 'Student' : 'Learner';

  const roster = session.attendeeIds.map((attendee) => ({
    _id: attendee._id,
    name: attendee.name,
    email: attendee.email,
    role: String(attendee._id) === String(session.hostId) ? hostRole : attendeeRole,
  }));

  res.json(roster);
});

module.exports = { createSession, listSessions, bookSession, getRoster };