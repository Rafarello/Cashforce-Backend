const { Sequelize } = require('sequelize');

const { options } = require('../config/config');

module.exports = new Sequelize(options);
