const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { 
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
  });
  return Category;
};

module.exports = CategoryModel;