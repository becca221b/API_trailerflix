const { catalogo } = require('../models');
console.log(catalogo);


exports.getCatalogo = async (req, res) => {
    try {
        const catalogo = await catalogo.findAll();
        res.status(200).json(catalogo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el catálogo', error: error.message });
    }
}

exports.getCatalogoByCategoria = async (req, res) => {
    const categorias = ['peliculas', 'series', 'documentales', 'infantiles'];
    try {
        const { categoria } = req.params;
        if (!categoria) {
            return res.status(400).json({ message: 'La categoría es requerida' });
        }
        if (categorias.includes(categoria)) {
            const catalogo = await Catalogo.findAll({ where: { categoria } });
            if (catalogo.length === 0) {
                return res.status(404).json({ message: 'No se encontraron películas en esta categoría' });
            }
            res.status(200).json(catalogo);
        } else {
            return res.status(400).json({ message: 'La categoría no es válida' });
        }
          
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el catálogo por categoría', error: error.message });
    }
}










