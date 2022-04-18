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
      patientId: {
        type: DataTypes.INTEGER,
        references: {
          model: "patients",
          key: "id"
        }
      },
      ilness: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
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
