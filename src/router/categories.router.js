const express = require('express');

const categoryController = require('../controller/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const categoryRouter = express.Router();

categoryRouter.post('/', authMiddleware.validationToken, categoryController.createCategory);
categoryRouter.get('/', authMiddleware.validationToken, categoryController.getAllCategories);

module.exports = {
  categoryRouter,
};