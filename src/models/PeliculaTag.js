const PeliculaTag = sequelize.define('peliculaTag', {
    peliculaID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Pelicula',
            key: 'peliculaID'
        }
    },
    tagID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Tag',
            key: 'tagID'
        }
    }
},{
    tableName: 'peliculaTag',
    timestamps: false
});
module.exports = PeliculaTag;