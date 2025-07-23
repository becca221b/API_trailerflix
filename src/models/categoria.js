const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombreCategoria: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'categorias',
  timestamps: false,
});

module.exports = Categoria;