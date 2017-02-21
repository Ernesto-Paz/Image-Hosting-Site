module.exports = function (sequelize, DataTypes) {
    return sequelize.define("album", { 
        albumname: {
            type: DataTypes.STRING,
            allowNull: false  
        }
    })
}

