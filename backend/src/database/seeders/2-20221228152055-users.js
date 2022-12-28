'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'ALLAN SOUZA', 
          email: 'allan@cashforce.com.br', 
          phone_Number: null,
          mobile: null,
          departament: null,
          verification_Code: '',
          email_Checked: 1, 
          created_At: '2020-10-01 21:31:37',
          updated_At: '2020-10-01 22:41:23',
          cashforce_Adm: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
