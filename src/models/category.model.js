const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
  });
  return Category;
};

module.exports = CategoryModel;