const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const PeliculaTag = sequelize.define('peliculaTag', {
    peliculaID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Pelicula',
            key: 'peliculaID'
        }
    },
    tagID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Tag',
            key: 'tagID'
        }
    }
},{
    tableName: 'peliculatag',
    timestamps: false
});
module.exports = PeliculaTag;