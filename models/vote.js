module.exports = function (sequelize, DataTypes) {
    return sequelize.define("vote", {
        vote: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }

    }, {hooks:{
        
        
        
        
    }, classMethods:{
        
        
        
    }, instanceMethods:{
        
        
        
        
    }})
}