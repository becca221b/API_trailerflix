const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trailerflix', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    
});

module.exports = sequelize;