module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Frado',
          last_name: '1',
          email: 'frado1@gmail.com',
          password: '$2b$10$NteiAbfGrOjh76Wne204Z.M5HeFP.Yzc5s8so6k0opoCzmu0k.q3W', // fradoo
        }, {
          first_name: 'Frado',
          last_name: '2',
          email: 'frado2@gmail.com',
          password: '$2b$10$.BSv.jFnPOMlbaMPppdDguzFkDMaruNhyL3TzioUJ9aV7ItHWH2.C', // fradoo
        }, {
          first_name: 'Frado',
          last_name: '3',
          email: 'frado3@gmail.com',
          password: '$2b$10$zED/JAxpDewG.gs2V5ye/.tnOMIzowou3oWKb.HmzpBSnHvxU2dE2', // fradoo
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
