const Reparto = sequelize.define('reparto', {
    peliculaID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Pelicula',
            key: 'peliculaID'
        }
    },
    actorID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Actor',
            key: 'actorID'
        }
    }
},{
    tableName: 'reparto',
    timestamps: false
});
module.exports = Reparto;