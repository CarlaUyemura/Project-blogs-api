const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
 };

 const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) {
    const error = new Error('Post does not exist');
    error.status = 404;
    throw error;
  }
  return post;
 };

 module.exports = {
  getAllPost,
  getPostById,
 };