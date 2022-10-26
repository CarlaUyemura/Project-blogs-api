'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('posts_categories', { 
    post_id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
      },
      category_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    }
  });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};