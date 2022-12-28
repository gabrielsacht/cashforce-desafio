'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'cnpjs',
      [
        {
          id: 1,
          cnpj: '00000000000001',
          company_Type: '2',
          created_At: '2020-10-29 21:20:33',
          updated_At: '2020-10-29 21:20:33',
        },
        {
          id: 2,
          cnpj: '00000000000002',
          company_Type: '1',
          created_At: '2020-10-29 21:20:33',
          updated_At: '2020-10-29 21:20:33',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};
