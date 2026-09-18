function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  if (err.code === 11000) {
    return res.status(409).json({ error: 'Duplicate resource, action already exists' });
  }
  res.status(statusCode).json({ error: err.message || 'Server error' });
}

module.exports = errorHandler;
