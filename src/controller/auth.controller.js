const authService = require('../services/auth.service');

const login = async (req, res) => {
  const { body } = req;
  const { status, message } = authService.validateBody(body);
  if (status === 400) {
   return res.status(status).json({ message });
  }
  const { email, password } = message;
  const token = await authService.validateLogin({ email, password });
  console.log(token.status, 'token');
  if (token.status) res.status(token.status).json({ message: token.message });
  res.status(200).json({ token });
};

module.exports = {
  login,
};