const { Model, DataTypes } = require('sequelize');
const DB = require('../config/database');

class Gender extends Model {}

Gender.init(
  {
    gender_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(10),
    },
  },
  {
    tableName: 'genders',
    sequelize: DB,
    modelName: 'Gender',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = Gender;
