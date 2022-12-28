'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'order_nf_id'
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING(255),
        field: 'order_number'
      },
      orderPath: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'order_path'
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'order_file_name'
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'order_original_name'
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'emission_date'
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'pdf_file'
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'emited_to'
      },
      nNf: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'n_nf'
      },
      CTE: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      value: {
        type: Sequelize.STRING(255),
        defaultValue: null
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
      userId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      buyerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        field: 'buyer_id',
        references: {
          model: 'buyers',
          key: 'id',
        }
      },
      providerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        field: 'provider_id',
        references: {
          model: 'providers',
          key: 'id',
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        field: 'order_status_buyer'
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        field: 'order_status_provider'
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'delivery_receipt'
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'cargo_packing_list'
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        field: 'delivery_ctrc'
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders')
  }
}
