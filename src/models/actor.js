const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Actor = sequelize.define('Actor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombreCompleto: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
}, {
  tableName: 'actores',
  timestamps: false,
});

module.exports = Actor;