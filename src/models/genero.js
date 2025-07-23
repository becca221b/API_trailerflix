const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Genero = sequelize.define('Genero', {
  idGenero: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'generos',
  timestamps: false,
});

module.exports = Genero;