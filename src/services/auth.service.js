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
    return { status: 400, message: 'Some required fields are missing' };
  }
  return { status: 200, message: value };
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    const error = 'Invalid fields';
    return { status: 400, message: error };
  } 
  const { password: _, ...useWithoutPassword } = user.dataValues;
  const token = jwt.createToken(useWithoutPassword);
  return token; 
};

module.exports = {
  validateBody,
  validateLogin,
};