const express = require('express');

const categoryController = require('../controller/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const categoryRouter = express.Router();

categoryRouter.post('/', authMiddleware.validationToken, categoryController.createCategory);

module.exports = {
  categoryRouter,
};