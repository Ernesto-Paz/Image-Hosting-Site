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
        fileDir : {
            type:DataTypes.STRING, 
            allowNull: false
        }
        
    })
}

//setting model for database table "images"