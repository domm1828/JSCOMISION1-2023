'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      name: {
        type: Sequelize.STRING(45)
      },
      last_name: {
        type: Sequelize.STRING(45)
      },
      phone: {
        type: Sequelize.STRING(45)
      },
      email: {
        unique:true,
        allowNull:false,
        type: Sequelize.STRING(45)
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};