'use strict';

const { ROLES } = require('../constants/roles');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'role', {
      type: Sequelize.DataTypes.ENUM(Object.values(ROLES)),
      allowNull: false,
      defaultValue: ROLES.USER
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'role')
  }
};
