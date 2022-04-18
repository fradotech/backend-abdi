const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('check_up_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      ilness: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        ),
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('check_up_histories')
  },
}
