const mongoose = require('mongoose');

// Simple, non-strict email format check. Not RFC 5322 compliant on purpose,
// just enough to catch obviously malformed input before it hits the database.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // enforces case insensitivity
        trim: true, //ignores leading and trailing spaces
        match: [EMAIL_REGEX, 'Please provide a valid email address'],
      },
      passwordHash: {
        type: String,
        required: true,
      },
      isInstructor: {
        type: Boolean,
        default: false,
      },
      creditBalance: {
        type: Number,
        default: 5,
        min: [0, 'Credit balance can never go negative'],
      },
    },
    { timestamps: true } // adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('User', userSchema);

/*
Reminder for wherever creditBalance is changed: never do `const user = await User.findById(id); user.creditBalance -= 1; await user.save();`

Always use the atomic conditional form instead, e.g.:

  const updated = await User.findOneAndUpdate(
    { _id: userId, creditBalance: { $gte: 1 } },
    { $inc: { creditBalance: -1 } },
    { new: true }
  );
  if (!updated) {
    // balance was insufficient at the moment of the update, reject the operation
  }
*/
