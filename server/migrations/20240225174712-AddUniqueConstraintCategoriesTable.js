'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Categories', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_name_constraint'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Categories', 'unique_name_constraint')
  }
};
