const sequelize = require('../config/mysql');
const Categoria = require('./Categoria');
const Genero = require('./Genero');
const Pelicula = require('./Pelicula');
const Tag = require('./Tag');
const Reparto = require('./Reparto');
const PeliculaTag = require('./PeliculaTag');
const Actor = require('./Actor');

// Relaciones
Pelicula.belongsTo(Categoria, { foreignKey: 'categoriaID' });
Pelicula.belongsTo(Genero, { foreignKey: 'generoID' });
Pelicula.belongsToMany(Actor, { through: Reparto, foreignKey: 'peliculaID' });
Actor.belongsToMany(Pelicula, { through: Reparto, foreignKey: 'actorID' });
Pelicula.belongsToMany(Tag, { through: PeliculaTag, foreignKey: 'peliculaID' });
Tag.belongsToMany(Pelicula, { through: PeliculaTag, foreignKey: 'tagID' });

module.exports = {
    sequelize,
    Categoria,
    Genero,
    Pelicula,
    Tag,
    Reparto,
    PeliculaTag,
    Actor
};