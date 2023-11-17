'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductTags', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id',
        }
      },
      tag_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: 'tags',
            key: 'id',
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductTags');
  }
};
