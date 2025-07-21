const sequelize = require('../config/mysql');
const Categoria = require('./Categorias');
const Genero = require('./Generos');
const catalogo = require('./Catalogo');
const Tagscatalogo = require('./Tagscatalogo');
const Tags = require('./Tags');
const Reparto = require('./Reparto');

const Actores = require('./Actores');

// Relaciones
catalogo.belongsTo(Categoria, { foreignKey: 'idCategoria' });
catalogo.belongsTo(Genero, { foreignKey: 'idGenero' });
catalogo.belongsToMany(Actores, { through: Reparto, foreignKey: 'idCatalogo' });
Actores.belongsToMany(catalogo, { through: Reparto, foreignKey: 'idActores' });
catalogo.belongsToMany(Tags, { through: Tagscatalogo, foreignKey: 'idCatalogo' });
Tags.belongsToMany(catalogo, { through: Tagscatalogo, foreignKey: 'idTags' });

module.exports = {
    sequelize,
    Categoria,
    Genero,
    catalogo,
    Tagscatalogo,
    Tags,
    Reparto,
    Tagscatalogo,
    Actores
};