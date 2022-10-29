const categoryService = require('../services/category.service');

const createCategory = async (req, res) => { 
  const { body } = req;
  const category = await categoryService.createCategory(body);
  res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};