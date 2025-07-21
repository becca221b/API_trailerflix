const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const categorias = sequelize.define('categorias', {
    idCategoria:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreCategoria:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'categorias',
    timestamps: false
});

module.exports = categorias;