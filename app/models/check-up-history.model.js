const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CheckUpHistory extends Model {
    static associate(models) {
      models.check_up_histories.belongsTo(models.patients, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  CheckUpHistory.init(
    {
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
        type: DataTypes.INTEGER,
        references: {
          model: "patients",
          key: "id"
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ilness: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'check_up_histories',
    },
  )
  return CheckUpHistory;
}
