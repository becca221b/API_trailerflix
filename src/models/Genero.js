const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Genero = sequelize.define('genero', {
    generoID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'genero',
    timestamps: false
});

module.exports = Genero;