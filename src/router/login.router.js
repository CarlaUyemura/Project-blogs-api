const express = require('express');

const authController = require('../controller/auth.controller');

const loginRouter = express.Router();

loginRouter.post('/', authController.login);

module.exports = {
  loginRouter,
};