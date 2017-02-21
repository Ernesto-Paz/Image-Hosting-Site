module.exports = function (sequelize, DataTypes) {
    return sequelize.define("image", {
        fileId:{
        type: DataTypes.STRING,
        allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        key: {
            type:DataTypes.STRING, 
            allowNull: false
        }
        
    })
}

//setting model for database table "images"