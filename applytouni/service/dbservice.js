require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@127.0.0.1:3306/${process.env.DB_NAME}`
);

module.exports = sequelize;
