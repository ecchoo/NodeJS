'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL
      },
      photo: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      composition: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
};
