'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'n_dup'
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'd_venc'
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'v_dup'
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
        field: 'available_to_market'
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderportions')
  }
}
