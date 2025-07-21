const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Reparto = sequelize.define('reparto', {
    idCatalogo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'catalogo',
            key: 'id'
        }
    },
    idActores:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Actores',
            key: 'id'
        }
    }
},{
    tableName: 'reparto',
    timestamps: false
});
module.exports = Reparto;