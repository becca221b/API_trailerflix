const sequelize = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Tagscatalogo = sequelize.define('tagscatalogo', {
    idCatalogo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'catalogo',
            key: 'id'
        }
    },
    idTags:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'tags',
            key: 'idTag'
        }
    }
},{
    tableName: 'tagscatalogo',
    timestamps: false
});
module.exports = Tagscatalogo; 