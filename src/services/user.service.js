const Joi = require('joi');
const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
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
  const { email } = await validateData(data);

  const user = await User.findOne({ where: { email } });
  if (user.email) {
    const error = new Error('User already registered');
    error.status = 400;
    throw error;
  } 
  const newUser = await User.create(data);
  return newUser;
};

module.exports = {
  getAll,
  createUser,
};