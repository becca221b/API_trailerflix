const sequelize = require('../config/mysql');
const Catalogo = require('./Catalogo');

//Test connection to database
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//Sync models with database
async function syncDatabase() {
    try {
        await sequelize.sync({ force: true }); // Use force: true to drop and recreate the tables
        console.log('Sincronizado con la base de datos!');
    } catch (error) {
        console.error('Unable to sync database:', error);
    }
}

module.exports = {
    sequelize,
    Catalogo,
    testConnection,
    syncDatabase
};