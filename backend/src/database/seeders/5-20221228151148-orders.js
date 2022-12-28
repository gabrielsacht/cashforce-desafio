'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          id: 1,
          order_Nf_Id: '1605181324132',
          order_Number: '18153',
          order_Path: null,
          order_File_Name: null,
          order_Original_Name: null,
          emission_Date: '2020-10-30 11:00:00-03:00',
          pdf_File: null,
          emited_To: '22843980000127',
          n_Nf: '18153',
          CTE: '',
          value: '198450',
          created_At: '2020-10-30 17:54:18',
          updated_At: '2020-10-30 17:54:18',
          cnpj_Id: 1,
          user_Id: 1,
          buyer_Id: 1,
          provider_Id: 1,
          order_Status_Buyer: '0',
          order_Status_Provider: '0',
          delivery_Receipt: null,
          cargo_Packing_List: null,
          delivery_Ctrc: null,
        },
        {
          id: 2,
          order_Nf_Id: '160518132413',
          order_Number: '18157',
          order_Path: null,
          order_File_Name: null,
          order_Original_Name: null,
          emission_Date: '2020-11-04 15:32:35-02:00',
          pdf_File: null,
          emited_To: '35705180000272',
          n_Nf: '18157',
          CTE: '',
          value: '168850',
          created_At: '2020-11-10 18:33:46',
          updated_At: '2020-11-10 18:33:46',
          cnpj_Id: 1,
          user_Id: 1,
          buyer_Id: 1,
          provider_Id: 1,
          order_Status_Buyer: '0',
          order_Status_Provider: '0',
          delivery_Receipt: null,
          cargo_Packing_List: null,
          delivery_Ctrc: null,
        },
        {
          id: 3,
          order_Nf_Id: '1605181324130',
          order_Number: '18184',
          order_Path: null,
          order_File_Name: null,
          order_Original_Name: null,
          emission_Date: '2020-11-10',
          pdf_File: null,
          emited_To: '00418477002640',
          n_Nf: '18184',
          CTE: '',
          value: '222795',
          created_At: '2020-11-12 11:42:06',
          updated_At: '2020-11-18 12:22:14',
          cnpj_Id: 1,
          user_Id: 1,
          buyer_Id: 1,
          provider_Id: 1,
          order_Status_Buyer: '7',
          order_Status_Provider: '3',
          delivery_Receipt: null,
          cargo_Packing_List: null,
          delivery_Ctrc: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};