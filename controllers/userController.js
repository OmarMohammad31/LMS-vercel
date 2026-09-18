const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');

// GET /users/me
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email, isInstructor, creditBalance } = req.user;
  res.json({ id: _id, name, email, isInstructor, creditBalance });
});

// GET /users (List all registered users) — creditBalance excluded, this
// endpoint backs the public directory and must never expose balances.
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, '-passwordHash -creditBalance');
  res.json(users);
});

module.exports = { getMe, getAllUsers };