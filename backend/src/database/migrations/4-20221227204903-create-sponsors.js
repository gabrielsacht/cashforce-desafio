'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sponsors', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      tradingName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'trading_name'
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'cashforce_tax'
      },
      responsibleName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'responsible_name'
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'responsible_email'
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'responsible_position'
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'responsible_phone'
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'responsible_mobile'
      },
      website: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      postalCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'postal_code'
      },
      address: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      number: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      complement: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      neighborhood: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      city: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      state: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      bank: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      bankAgency: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'bank_agency'
      },
      account: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'phone_number'
      },
      situation: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      situationDate: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'situation_date'
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
      cnpjId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        field: 'cnpj_id',
        references: {
          model: 'cnpjs',
          key: 'id',
        }
      },
      email: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sponsors')
  }
}
