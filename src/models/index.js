const sequelize = require('../config/mysql');
const Categoria = require('./Categorias');
const Genero = require('./Generos');
const Catalogo = require('./Catalogo');
const Tagscatalogo = require('./Tagscatalogo');
const Tags = require('./Tags');
const Reparto = require('./Reparto');

const Actores = require('./Actores');

// Relaciones
Catalogo.belongsTo(Categoria, { foreignKey: 'idCategoria' });
Catalogo.belongsTo(Genero, { foreignKey: 'idGenero' });
Catalogo.belongsToMany(Actores, { through: Reparto, foreignKey: 'idCatalogo' });
Actores.belongsToMany(Catalogo, { through: Reparto, foreignKey: 'idActores' });
Catalogo.belongsToMany(Tags, { through: Tagscatalogo, foreignKey: 'idCatalogo' });
Tags.belongsToMany(Catalogo, { through: Tagscatalogo, foreignKey: 'idTags' });

module.exports = {
    sequelize,
    Categoria,
    Genero,
    Catalogo,
    Tagscatalogo,
    Tags,
    Reparto,
    Tagscatalogo,
    Actores
};