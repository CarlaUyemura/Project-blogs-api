const error = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong, try later! =/';
  return res.status(status).json({ message });
};

module.exports = {
  error,
};