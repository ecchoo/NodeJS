'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Delivery', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      productId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      count: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      deliveryDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Delivery')
  }
};
