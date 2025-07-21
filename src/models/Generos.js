const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const generos = sequelize.define('genero', {
    idGenero:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'generos',
    timestamps: false
});

module.exports = generos;