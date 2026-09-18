const { verifyToken } = require('../utils/jwt');
const AppError = require('../utils/AppError');
const User = require('../models/User');

const requireAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) throw new AppError('Not authenticated', 401);

    const decoded = verifyToken(header.split(' ')[1]);
    const user = await User.findById(decoded.id);
    if (!user) throw new AppError('User no longer exists', 401);

    req.user = user; // available in every controller after this
    next();
  } catch {
    next(new AppError('Not authenticated', 401));
  }
};

const requireInstructor = (req, res, next) => {
  if (!req.user.isInstructor) return next(new AppError('Instructor access only', 403));
  next();
};

module.exports = { requireAuth, requireInstructor };
