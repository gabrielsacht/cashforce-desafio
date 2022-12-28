'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'phone_number'
      },
      mobile: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      departament: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'verification_code'
      },
      emailChecked: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        field: 'email_checked'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at'
      },
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        field: 'cashforce_adm'
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
}
