const UserService = require('../services/user.service');
const authService = require('../services/auth.service');

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (_e) {
    res.status(500).json({ message: 'Error' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
    const user = await UserService.getById(id);
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { body } = req;
  const { email, password } = await UserService.createUser(body);
  const token = await authService.validateLogin({ email, password });
  res.status(201).json({ token });
};

module.exports = {
  getAll,
  getById,
  createUser,
};