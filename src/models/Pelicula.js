const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Pelicula = sequelize.define('pelicula', {
    peliculaID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    poster:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoriaID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria',
            key: 'categoriaID'
        }
    },
    generoID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Genero',
            key: 'generoID'
        }
    },
    resumen:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    temporadas:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    duracion:{
        type: DataTypes.TIME,
        allowNull: true
    },
    trailer:{
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    tableName: 'pelicula',
    timestamps: false
});

module.exports = Pelicula;