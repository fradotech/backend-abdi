const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Add relationships here
    }

    checkPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        },
      },
      role: {
        type: DataTypes.STRING,
        default: 'User'
      },
      verify: {
        type: DataTypes.INTEGER,
        default: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      scopes: {
        noPassword: {
          attributes: { exclude: ['password'] },
        },
      },
      sequelize,
      modelName: 'users',
    },
  );
  return User;
};
