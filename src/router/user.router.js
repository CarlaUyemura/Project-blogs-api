const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get('/', authMiddleware.validationToken, userController.getAll);

userRouter.post('/', userController.createUser);

module.exports = {
  userRouter,
};