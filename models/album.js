module.exports = function (sequelize, DataTypes) {
    return sequelize.define("album", { 
        albumName: {
            type: DataTypes.STRING,
            allowNull: false  
        }
    })
}

