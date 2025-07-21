const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Actores = sequelize.define('actores', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreCompleto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'actores',
    timestamps: false
});

module.exports = Actores;