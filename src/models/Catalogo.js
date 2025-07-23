const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Catalogo = sequelize.define('Catalogo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  poster: {
    type: DataTypes.STRING(255),
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idGenero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  resumen: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  temporadas: {
    type: DataTypes.STRING(50),
  },
  duracion: {
    type: DataTypes.STRING(50),
  },
  trailer: {
    type: DataTypes.STRING(200),
  },
}, {
  tableName: 'catalogo',
  timestamps: false,
});

module.exports = Catalogo;
