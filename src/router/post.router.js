const express = require('express');

const postController = require('../controller/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const postRouter = express.Router();

// postRouter.post('/', authMiddleware.validationToken, postController);
postRouter.get('/', authMiddleware.validationToken, postController.getAllPost);

module.exports = {
  postRouter,
};