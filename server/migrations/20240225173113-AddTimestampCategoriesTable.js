'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'createdAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    });
    await queryInterface.addColumn('Categories', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'createdAt');
    await queryInterface.removeColumn('Categories', 'updatedAt');
  }
};
