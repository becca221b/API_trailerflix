const Tag = sequelize.define('tag', {
    tagID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tag:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'tag',
    timestamps: false
});

module.exports = Tag;