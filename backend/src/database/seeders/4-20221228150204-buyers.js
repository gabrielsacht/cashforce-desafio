'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'buyers',
      [
        {
          id: 1,
          name: 'SACADO 001', 
          trading_Name: 'SACADO 001 LTDA', 
          cashforce_Tax: '0', 
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
          phone_Number: null,
          situation: null, 
          situation_Date: null, 
          created_At: '2020-10-29 21:20:33',
          updated_At: '2020-10-29 21:20:34', 
          cnpj_Id: 1, 
          confirm: 1, 
          email: null, 
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('buyers', null, {});
  }
};
