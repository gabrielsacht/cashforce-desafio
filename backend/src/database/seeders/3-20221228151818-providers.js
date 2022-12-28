'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'providers',
      [
        {
          id: 1,
          name: 'CEDENTE 002',
          trading_Name: 'CEDENTE 002 LTDA',
          cashforce_Tax: null,
          responsible_Name: null,
          responsible_Email: null,
          responsible_Position: null,
          responsible_Phone: null,
          responsible_Mobile: null,
          website: null,
          postal_Code: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bank_Agency: null,
          account: null,
          documents: null,
          phone_Number: null,
          situation: null,
          situation_Date: null,
          created_At: '2020-10-29 21:22:21',
          updated_At: '2020-10-29 21:22:22',
          cnpj_Id: 2,
          email: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
