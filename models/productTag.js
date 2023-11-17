const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductTag extends Model {}


ProductTag.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'product',
        key: 'id',
    }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'tag',
        key: 'id',
    }
  }
}, {
  sequelize,
  timestamps: false, 
  freezeTableName: true, 
  underscored: true,
  modelName: 'productTag', 
});
return ProductTag;
};
