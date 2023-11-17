'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        product_name: 'Jauma Raindrops Grenache',
        price: 39,
        stock: 7,
        category_id: 1
      },
      {
        product_name: 'Other Right Sunshine Viognier',
        price: 37,
        stock: 11,
        category_id: 3
      },
      {
        product_name: 'Melsheimer Riesling',
        price: 45,
        stock: 3,
        category_id: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
