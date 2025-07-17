const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Categoria = sequelize.define('categoria', {
    categoriaID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'categoria',
    timestamps: false
});

module.exports = Categoria;