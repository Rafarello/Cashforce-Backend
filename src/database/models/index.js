const { Sequelize } = require('sequelize');

// DB Development

const { development: options } = require('../config/config');

const sequelize = new Sequelize(options);

module.exports = sequelize
