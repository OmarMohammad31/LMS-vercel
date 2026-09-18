const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const tutoringRoutes = require('./routes/tutoringRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

const allowedOrigin = process.env.CORS_ORIGIN || '*';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/', (req, res) => res.json({ status: 'ok' })); // health check

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);
app.use('/tutoring-requests', tutoringRoutes);

app.use(errorHandler); // must be last

module.exports = app;
