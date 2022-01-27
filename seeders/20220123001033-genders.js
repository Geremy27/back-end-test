'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genders', [
      {
        name: 'male',
      },
      {
        name: 'female',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genders', null, {});
  },
};
