const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 
const Category = require('./category'); // Adjust the path as needed
const Tag = require('./tag'); // Adjust the path as needed
const ProductTag = require('./productTag');

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
        isDecimal: true, 
        min: 0.01 
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10 ,
    validate: {
        isNumeric: true,
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'category',
        key: 'id',
    }
}
}, {
  sequelize,
  timestamps: false, 
  freezeTableName: true, 
  underscored: true,
  modelName: 'product', 
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
  });

  Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
  });

module.exports = Product;
