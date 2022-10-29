const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', authMiddleware.validationToken, userController.getAll);
userRouter.get('/:id', authMiddleware.validationToken, userController.getById);

module.exports = {
  userRouter,
};