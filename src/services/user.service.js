const Joi = require('joi');
const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, { 
    attributes: {
      exclude: ['password'],
  } });
  if (!user) {
    const error = new Error('User does not exist');
    error.status = 404;
    throw error;
  }
  return user;
};

const validateData = (data) => {
  const schemaBody = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });
  const { error, value } = schemaBody.validate(data);
 
  if (error) {
    error.status = 400;
    throw error;
  }
  return value;
};

const createUser = async (data) => {
  const { email } = validateData(data);
  const user = await User.findOne({ where: { email } });
  if (user) {
    const error = new Error('User already registered');
    error.status = 409;
    throw error;
  } 
  const newUser = await User.create(data);
  return newUser;
};

module.exports = {
  getAll,
  getById,
  createUser,
};