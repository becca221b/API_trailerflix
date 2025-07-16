const mongoClient = require('../config/mongo');
const {sequelize} = require('../config/mysql');
//const {migrarPeliculas} = require('../services/peliculaService');

async function migrate() {
    try {
        await mongoClient.connect();
        console.log('Conexión a MongoDB establecida correctamente');
        await sequelize.authenticate();
        console.log('Conexión a MySQL establecida correctamente');

        const db = mongoClient.db();
        const peliculas = await db.collection('peliculas').find({}).toArray();

        const transaction = await sequelize.transaction();
        try {
            await migrarPeliculas(peliculas, transaction);
            await transaction.commit();
            console.log('Migración completada correctamente');
        } catch (error) {
            await transaction.rollback();
            console.error('Error en la migración:', error);
            throw error;
        }

        await mongoClient.close();
        await sequelize.close();

    } catch (error) {
        console.error('Error al conectar a MongoDB o MySQL:', error);
        process.exit(1);
    }
}
module.exports = {migrate};