'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [
      { tag_name: 'Organic'},
      { tag_name: 'Sulphur Free'},
      { tag_name: 'German'},
      // Add more if needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
