const models = require('../models');

exports.getCatalogo = async (req, res) => {
    try {
        const catalogo = await models.catalogo.findAll();
        res.status(200).json(catalogo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
