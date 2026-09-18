const mongoose = require('mongoose');
require('../models/CreditTransaction');

let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log('MongoDB connected'))
      .catch((err) => {
        connectionPromise = null;
        throw err;
      });
  }
  await connectionPromise;
}

module.exports = connectDB;
