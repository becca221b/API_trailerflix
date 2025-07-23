require('dotenv').config();
const express = require('express');
const app = express();
const catalogoRoutes = require('./src/routes/catalogoRoutes');
const { sequelize } = require('./src/models/index');
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/catalogo', catalogoRoutes);

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
        console.log('Servidor corriendo en http://localhost:' + PORT);
    });
}).catch((error) => {
    console.log('Error al sincronizar la base de datos', error);
});







