const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Tag = sequelize.define('Tag', {
  idTag: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'tags',
  timestamps: false,
});

module.exports = Tag;