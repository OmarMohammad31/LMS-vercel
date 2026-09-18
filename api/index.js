const connectDB = require('../config/db');
const app = require('../app');

connectDB().catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;
