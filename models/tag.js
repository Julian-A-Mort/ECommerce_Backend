const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Tag extends Model {
        static associate(models) {
            Tag.belongsToMany(models.product, {
                through: models.productTag,
                foreignKey: 'tag_id',
            });
        }
    }

Tag.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tag_name: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  timestamps: false, 
  freezeTableName: true, 
  underscored: true,
  modelName: 'tag', 
});

  return Tag;
};