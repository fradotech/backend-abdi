module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'check_up_histories',
      [
        {
          patient_id: 1,
          ilness: "Sehat kok",
          description: "Software Developer",
        }, {
          patient_id: 2,
          ilness: "Pusing",
          description: "UI/UX Designer",
        }, {
          patient_id: 3,
          ilness: "Pusing",
          description: "Project Manager",
        }, {
          patient_id: 4,
          ilness: "Pusing",
          description: "QA Engineer",
        }, {
          patient_id: 5,
          ilness: "Pusing",
          description: "Frontend Developer",
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('check_up_histories', null, {});
  },
};
