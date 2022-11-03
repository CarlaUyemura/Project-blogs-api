const postService = require('../services/post.service');

const getAllPost = async (_req, res) => {
  const posts = await postService.getAllPost();
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  res.status(200).json(post);
};

module.exports = {
  getAllPost,
  getPostById,
};