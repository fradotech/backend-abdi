module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Framesta',
          last_name: 'Fernando',
          email: 'fradotech@gmail.com',
          password: '$2b$10$NteiAbfGrOjh76Wne204Z.M5HeFP.Yzc5s8so6k0opoCzmu0k.q3W', // fradoo
        }, {
          first_name: 'Mochammad Alghifary Syaichul',
          last_name: 'Rijal',
          email: 'syaichul@gmail.com',
          password: '$2b$10$.BSv.jFnPOMlbaMPppdDguzFkDMaruNhyL3TzioUJ9aV7ItHWH2.C', // fradoo
        }, {
          first_name: 'Malik',
          last_name: 'Najimudin',
          email: 'malikn@gmail.com',
          password: '$2b$10$zED/JAxpDewG.gs2V5ye/.tnOMIzowou3oWKb.HmzpBSnHvxU2dE2', // fradoo
        }, {
          first_name: 'Fajar Maulideo',
          last_name: 'Antaqho',
          email: 'deoantaqho@gmail.com',
          password: '$2b$10$.BSv.jFnPOMlbaMPppdDguzFkDMaruNhyL3TzioUJ9aV7ItHWH2.C', // fradoo
        }, {
          first_name: 'Muhammad Fiqri',
          last_name: 'Ardi',
          email: 'fiqriardi@gmail.com',
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
