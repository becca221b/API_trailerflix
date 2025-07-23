const app = require('./app');
const { testConnection, syncDatabase } = require('./src/models/syncDbWithModels');

const PORT = process.env.PORT || 3000;

//Conectar a la base de datos y sincronizar los modelos
const startServer = async () => {
    try {
        await testConnection();
        await syncDatabase();

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto:${PORT}`);
            console.log(`API URL: http://localhost:${PORT}/api`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

startServer();