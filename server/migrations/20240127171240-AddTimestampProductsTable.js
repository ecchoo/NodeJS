'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'createdAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    });
    await queryInterface.addColumn('Products', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'createdAt');
    await queryInterface.removeColumn('Products', 'updatedAt');
  }
};
