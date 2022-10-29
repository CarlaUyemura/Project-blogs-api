const Joi = require('joi');
const jwt = require('../utils/jwt');

const { User } = require('../models');

const validateBody = (params) => {
  const schemaBody = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schemaBody.validate(params);
  if (error) {
    error.status = 400;
    error.message = 'Some required fields are missing';
    throw error;
  }
  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  } 
  const { password: _, ...useWithoutPassword } = user.dataValues;
  const token = jwt.createToken(useWithoutPassword);
  return token; 
};

const verifyToken = (token) => {
if (!token) {
  const error = new Error('Token not found');
  error.status = 401;
  throw error;
}
const user = jwt.validateToken(token);
return user;
};

module.exports = {
  validateBody,
  validateLogin,
  verifyToken,
};