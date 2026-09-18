const TutoringRequest = require('../models/TutoringRequest');
const User = require('../models/User');
const { createSessionWithCalendar } = require('../services/sessionService');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

// Peer tutoring is student-only. Blocks instructor accounts at the API
// level, not just in the UI.
function blockInstructors(req) {
  if (req.user.isInstructor) {
    throw new AppError('Peer tutoring is only available to student accounts', 403);
  }
}

// POST /tutoring-requests (FR3.2, FR3.3)
const createRequest = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const { topic } = req.body;
  if (!topic) throw new AppError('Topic is required', 400);

  const learner = await User.findOne({ _id: req.user._id, creditBalance: { $gte: 1 } });
  if (!learner) throw new AppError('Insufficient credit balance', 400);

  try {
    const request = await TutoringRequest.create({ learnerId: req.user._id, topic });
    res.status(201).json(request);
  } catch (err) {
    if (err.code === 11000) {
      throw new AppError('You already have a pending tutoring request', 409);
    }
    throw err;
  }
});

// GET /tutoring-requests — open requests, excluding the caller's own
const listRequests = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const requests = await TutoringRequest.find({
    status: 'open',
    learnerId: { $ne: req.user._id },
  }).populate('learnerId', 'name email');
  res.json(requests);
});

// GET /tutoring-requests/mine
const listMine = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const requests = await TutoringRequest.find({
    $or: [{ learnerId: req.user._id }, { tutorId: req.user._id }],
  }).sort({ createdAt: -1 });
  res.json(requests);
});

// POST /tutoring-requests/:id/accept (FR3.4, FR3.5)
const acceptRequest = asyncHandler(async (req, res) => {
  blockInstructors(req);
  const request = await TutoringRequest.findOne({ _id: req.params.id, status: 'open' })
      .populate('learnerId', 'name email');
  if (!request) throw new AppError('Request not available', 404);

  const tutor = req.user;
  const { startTime, durationMinutes } = req.body;
  if (!startTime || !durationMinutes) throw new AppError('startTime and durationMinutes are required', 400);

  const session = await createSessionWithCalendar({
    type: 'PeerTutoring',
    title: `Peer Tutoring: ${request.topic}`,
    description: `Tutoring session between ${tutor.name} and ${request.learnerId.name}`,
    startTime,
    durationMinutes,
    capacity: 2,
    hostId: tutor._id,
    attendeeEmails: [tutor.email, request.learnerId.email],
  });
  session.attendeeIds.push(request.learnerId._id);
  await session.save();

  request.tutorId = tutor._id;
  request.sessionId = session._id;
  request.status = 'accepted';
  await request.save();

  res.json(request);
});

// POST /tutoring-requests/:id/confirm (FR3.7-3.10)
const confirmRequest = asyncHandler(async (req, res) => {
  const request = await TutoringRequest.findById(req.params.id);
  if (!request) throw new AppError('Request not found', 404);

  const userId = String(req.user._id);
  const isLearner = String(request.learnerId) === userId;
  const isTutor = String(request.tutorId) === userId;
  if (!isLearner && !isTutor) throw new AppError('Not part of this session', 403);

  const flagField = isLearner ? 'learnerConfirmed' : 'tutorConfirmed';
  const updated = await TutoringRequest.findOneAndUpdate(
      { _id: request._id },
      { $set: { [flagField]: true } },
      { new: true }
  );

  if (updated.learnerConfirmed && updated.tutorConfirmed) {
    const result = await TutoringRequest.confirmAndTransfer(updated._id);
    return res.json(result);
  }

  res.json(updated);
});

module.exports = { createRequest, listRequests, listMine, acceptRequest, confirmRequest };