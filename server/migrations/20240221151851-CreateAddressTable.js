'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      numberHouse: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      building: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER
      },
      structure: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER
      },
      fraction: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER
      },
      numberApartament: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses')
  }
};
