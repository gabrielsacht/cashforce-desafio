'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'ad_valorem'
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'expires_in'
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        field: 'payment_status_sponsor'
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
        field: 'payment_status_provider'
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
      orderId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        field: 'order_id',
        references: {
          model: 'orders',
          key: 'id',
        }
      },
      sponsorId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        field: 'sponsor_id',
        references: {
          model: 'sponsors',
          key: 'id',
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers')
  }
}
