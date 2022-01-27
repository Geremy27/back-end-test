const { Sequelize } = require('sequelize');
const dbConfig = require('./database.json');

const env = process.env.NODE_ENV;

const database = new Sequelize(
  dbConfig[env] && dbConfig[env].database ? dbConfig[env].database : 'people',
  // Going for default user and password.
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = database;
