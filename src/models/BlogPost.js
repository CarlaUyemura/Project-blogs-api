const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    user_id: {
     type: DataTypes.INTEGER,
     foreignKey: true,
    }
  }, {
    tableName: 'blog_posts',
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
  }

  return BlogPost;
};

module.exports = BlogPostModel;