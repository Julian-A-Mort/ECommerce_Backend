'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { category_name: 'Red Wine'},
      { category_name: 'White Wine'},
      { category_name: 'Orange Wine'},
      // Add more if needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
