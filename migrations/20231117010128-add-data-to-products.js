'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'stock', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 10
    });

    await queryInterface.addColumn('Products', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'stock');
    await queryInterface.removeColumn('Products', 'category_id');
  }
};
