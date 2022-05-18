module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('check_up_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ilness: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('check_up_histories')
  },
}
