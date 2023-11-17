const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.category, {
                foreignKey: 'category_id',
            });

            Product.belongsToMany(models.tag, {
                through: models.productTag,
                foreignKey: 'product_id',
            });
        }
    }

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

  return Product;
};