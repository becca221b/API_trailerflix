const models = require('../models');
const { Op } = require('sequelize');

exports.getCatalogo = async (req, res) => {
    try {
        const catalogo = await models.catalogo.findAll();
        res.status(200).json(catalogo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// 10. Contar la cantidad total de películas registradas
exports.getCountTotalPeliculas = async (req, res) => {
    try {
        const peliculasCount = await models.catalogo.count(
            { where: { idCategoria : 4 } }
        );
        res.status(200).json({ peliculasCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// 11. Contar la cantidad total de películas registradas
exports.getCountTotalSeries = async (req, res) => {
    try {
        const seriesCount = await models.catalogo.count(
            { where: { idCategoria : 3 } }
        );
        res.status(200).json({ seriesCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCountByCategory = async (req, res) => {
    try {
        const category = req.params.category.toLowerCase();
        if (!category) {
            return res.status(400).json({ message: 'Category parameter is required' });
        }
        //console.log(`Category received: ${category}`);
        // Buscar la categoría por nombre
        const categoria = await models.Categoria.findOne({ 
            where : {
                nombreCategoria : {[Op.like]: `%${category}%` }
            }
        });
        if (!categoria) {
            return res.status(404).json({ message: 'Category not found' });
        }
        // Contar los elementos del catálogo con el idCategoria encontrado
        const categoriaCount = await models.catalogo.count({ where: { idCategoria: categoria.idCategoria } });
        
        res.status(200).json({ count: categoriaCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// 12. Listar las series en orden descendente por cantidad de temporadas.
exports.getSeriesBySeasons = async (req, res) => {
    try {
        const series = await models.catalogo.findAll({
            where: { idCategoria: 3 }, // id de la categoría "Series"
            order: [['temporadas', 'DESC']]
        });
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// 13. Agregar el campo fecha_lanzamiento (tipo DATE) a la tabla de trabajos fílmicos y actualizar las fechas de los títulos del género "Aventura".
exports.actalizarFechaDeLanzamiento = async (req, res) => {
    try {
        const generoAventura = await models.Genero.findOne({ where: { Nombre: 'Aventura' } });

        // Actualizar los títulos del género "Aventura" con una fecha de lanzamiento ficticia
        const updated = await models.catalogo.update(
            { fecha_lanzamiento: new Date('2025-01-01') }, // Fecha ficticia
            { where: { idGenero: generoAventura.idGenero } }
        );

        res.status(200).json({ message: `${updated[0]} titulos actualizados existosamente` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// 14. Buscar películas por palabra clave en título o descripción (por ejemplo: "Aventura", "madre", "Ambientada").
exports.getCatalogoByPalabraClave = async (req, res) => {
    try {
        const palabraClave = req.query.palabraClave;
        if (!palabraClave) {
            return res.status(400).json({ message: 'Palabra clave es requerida' });
        }

        const results = await models.catalogo.findAll({
            where: {
                [Op.or]: [
                    { titulo: { [Op.like]: `%${palabraClave}%` } },
                    { resumen: { [Op.like]: `%${palabraClave}%` } }
                ]
            }
        });
        res.status(200).json(results); 
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}