module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'patients',
      [
        {
          name: "frado1",
          description: "description",
          birth_place: "birth_place",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "address",
          phone: "085704816007",
        }, {
          name: "frado2",
          description: "description",
          birth_place: "birth_place",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "address",
          phone: "085704816007",
        }, {
          name: "frado3",
          description: "description",
          birth_place: "birth_place",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "address",
          phone: "085704816007",
        }, 
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('patients', null, {});
  },
};
