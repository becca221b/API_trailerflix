const Actor = sequelize.define('actor', {
    actorID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreCompleto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'actor',
    timestamps: false
});

module.exports = Actor;