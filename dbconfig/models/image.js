module.exports = function (sequelize, DataTypes) {
    return sequelize.define("image", {
        fileid:{
        type: DataTypes.STRING,
        allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filedir : {
            type:DataTypes.STRING, 
            allowNull: false
        }
        
    })
}

//setting model for database table "images"