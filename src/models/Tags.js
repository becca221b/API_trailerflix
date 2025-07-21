const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Tags = sequelize.define('tags', {
    idTag:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'tags',
    timestamps: false
});

module.exports = Tags;