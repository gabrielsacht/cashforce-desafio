'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cnpjs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      companyType: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'company_type'
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cnpjs')
  }
}
