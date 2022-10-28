const authService = require('../services/auth.service');

const login = async (req, res) => {
  const { body } = req;
  const { email, password } = authService.validateBody(body);
  const token = await authService.validateLogin({ email, password });
  res.status(200).json({ token });
};

module.exports = {
  login,
};