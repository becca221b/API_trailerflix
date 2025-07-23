const express = require('express');
require('dotenv').config();

const app = express();

// Middleware para manejar json
app.use(express.json());

//Middleware para header
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json'); 
    next();
});

//Rutas
const catalogoRouter = require('./src/routes/catalogoRouter');


app.use('/api/catalogo', catalogoRouter);

// Middleware de error 404 para cualquier otra ruta
app.use((req, res) => {
    res.status(404).json({ error: 'Ouch!! Esa ruta no existe'});
});

// Middleware 500 - para cualquier error que se dispare
app.use((err, req, res, next) => {
    console.error('Error no capturado:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;

