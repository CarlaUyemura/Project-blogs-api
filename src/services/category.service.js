const Joi = require('joi');
const { Category } = require('../models');

const validateName = (name) => {
  const schemaName = Joi.object({
    name: Joi.string().required(),
  });
  const { error, value } = schemaName.validate(name);
  if (error) {
    error.status = 400;
    throw error;
  }
  return value;
};

const createCategory = async (category) => {
  const name = validateName(category);
  const newCategory = await Category.create(name);
  return newCategory;
};

module.exports = {
  createCategory,
};