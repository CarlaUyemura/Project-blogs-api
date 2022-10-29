const postService = require('../services/post.service');

const getAllPost = async (_req, res) => {
  const posts = await postService.getAllPost();
  res.status(200).json(posts);
};

module.exports = {
  getAllPost,
};