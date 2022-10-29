const categoryService = require('../services/category.service');

const createCategory = async (req, res) => { 
  const { body } = req;
  const category = await categoryService.createCategory(body);
  res.status(201).json(category);
};

module.exports = {
  createCategory,
};