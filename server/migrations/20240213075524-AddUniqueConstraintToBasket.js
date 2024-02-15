'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Basket', {
      fields: ['userId', 'productId'],
      type: 'unique',
      name: 'unique_userId_productId_constraint'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Basket', 'unique_userId_productId_constraint')
  }
};
