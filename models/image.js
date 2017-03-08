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
        },
        score: {
        type:DataTypes.INTEGER,
        defaultValue: 0
        },
        upvote:{
        type:DataTypes.INTEGER,
        defaultValue: 0
        },
        downvote:{
        type: DataTypes.INTEGER,
        defaultValue: 0
        },
        privacy: {
            
        type: DataTypes.ENUM("Useronly", "Unlisted", "Public"),
        defaultValue: "Public"
            
        }
        
    }, {instancemethods: {
         calculateScore: function(){
             
             
             
         }                   
                            
                            
                            }})
}

//setting model for database table "images"