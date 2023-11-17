'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductTags', [
      // Associations for product 1
      { product_id: 1, tag_id: 1 },
      { product_id: 1, tag_id: 2 },

      // Associations for product 2
      { product_id: 2, tag_id: 2 },

      // Associations for product 3
      { product_id: 3, tag_id: 1 },
      { product_id: 3, tag_id: 3 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductTags', null, {});
  }
};
