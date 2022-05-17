module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'check_up_histories',
      [
        {
          patient_id: 1,
          ilness: "stress",
          description: "description",
        }, {
          patient_id: 2,
          ilness: "stress",
          description: "description",
        }, {
          patient_id: 3,
          ilness: "stress",
          description: "description",
        }, 
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('check_up_histories', null, {});
  },
};
