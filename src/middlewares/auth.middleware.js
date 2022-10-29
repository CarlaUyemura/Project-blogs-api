const authService = require('../services/auth.service');

const validationToken = (req, _res, next) => {
  const { authorization } = req.headers;
  const user = authService.verifyToken(authorization);
  req.user = user;
  next();
};

module.exports = { validationToken };