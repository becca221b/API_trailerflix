const mongoClient = require('../config/mongo');
const sequelize = require('../config/mysql');
const {migrarPeliculas} = require('./migrarPeliculas');

async function migrate() {
    console.log('Iniciando migración...');
    try {
        console.log('Conectando a MongoDB...');
        await mongoClient.connect();
        console.log('Conexión a MongoDB establecida correctamente');
        
        console.log('Conectando a MySQL...');
        await sequelize.authenticate();
        console.log('Conexión a MySQL establecida correctamente');

        console.log('Obteniendo datos de MongoDB...');
        const db = mongoClient.db();
        const peliculas = await db.collection('trailerflix').find({}).toArray();
        console.log(`Se encontraron ${peliculas.length} películas para migrar`);

        console.log('Iniciando transacción...');
        const transaction = await sequelize.transaction();
        try {
            console.log('Ejecutando migración de películas...');
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
        console.log('Conexiones cerradas correctamente');

    } catch (error) {
        console.error('Error al conectar a MongoDB o MySQL:', error);
        process.exit(1);
    }
}
module.exports = {migrate};

// Ejecutar la migración si el archivo se ejecuta directamente
if (require.main === module) {
    console.log('Ejecutando migración desde línea de comandos...');
    migrate().catch(error => {
        console.error('Error en la migración:', error);
        process.exit(1);
    });
}