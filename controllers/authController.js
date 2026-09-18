const User = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/password');
const { signToken } = require('../utils/jwt');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

// POST /auth/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password, isInstructor } = req.body;
  if (!name || !email || !password) throw new AppError('Missing required fields', 400);

  const passwordHash = await hashPassword(password);
  const user = await User.create({ name, email, passwordHash, isInstructor: !!isInstructor });
  // creditBalance defaults to 5 automatically (FR3.1)

  res.status(201).json({ token: signToken(user._id), user: { id: user._id, name, email } });
});

// POST /auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.passwordHash))) {
    throw new AppError('Invalid credentials', 401);
  }
  res.json({ token: signToken(user._id), user: { id: user._id, name: user.name, email } });
});

module.exports = { register, login };
