const { Model, DataTypes } = require('sequelize');

const DB = require('../config/database');
const Gender = require('./gender');

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: { type: DataTypes.STRING(50) },
    last_name: { type: DataTypes.STRING(50) },
    birthday: { type: DataTypes.DATE },
    password: { type: DataTypes.STRING(40) },
    gender_id: {
      type: DataTypes.INTEGER,
      model: Gender,
      key: 'gender_id',
    },
  },
  {
    tableName: 'users',
    sequelize: DB,
    modelName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = User;
