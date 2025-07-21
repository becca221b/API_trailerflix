const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Catalogo = sequelize.define('catalogo', {
    id:{
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
    idCategoria:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categorias',
            key: 'idCategoria'
        }
    },
    idGenero:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Generos',
            key: 'idGenero'
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
    tableName: 'catalogo',
    timestamps: false
});

module.exports = Catalogo;