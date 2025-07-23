const sequelize = require('../config/mysql');
const Categoria = require('./categoria');
const Genero = require('./genero');
const catalogo = require('./catalogo');
const Tagscatalogo = require('./Tagscatalogo');
const Tags = require('./tag');
const Reparto = require('./reparto');
const Actor = require('./actor');

// Relaciones
catalogo.belongsTo(Categoria, { foreignKey: 'idCategoria' });
catalogo.belongsTo(Genero, { foreignKey: 'idGenero' });
catalogo.belongsToMany(Actor, { through: Reparto, foreignKey: 'idCatalogo' });
Actor.belongsToMany(catalogo, { through: Reparto, foreignKey: 'idActores' });
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
    Actor
};