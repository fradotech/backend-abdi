module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'patients',
      [
        {
          name: "Frado",
          description: "Software Developer",
          birth_place: "Malang",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "Malang",
          phone: "085704816007",
        }, {
          name: "Syaichul",
          description: "UI/UX Designer",
          birth_place: "Malang",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "Malang",
          phone: "085704816007",
        }, {
          name: "Malik",
          description: "Project Manager",
          birth_place: "Probolinggo",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "Probolinggo",
          phone: "085704816007",
        }, {
          name: "Deo",
          description: "QA Engineer",
          birth_place: "Mojokerto",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "Mojokerto",
          phone: "085704816007",
        }, {
          name: "Fiqri",
          description: "Frontend Developer",
          birth_place: "Kalimantan",
          birth: "2000-04-18 16:46:42",
          age: 20,
          address: "Kalimantan",
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
