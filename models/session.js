module.exports = function (sequelize, DataTypes) {
    return sequelize.define("session", {
        sessionId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastUsed:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        }

    }, {hooks:{
        
        
        
        
    }, classMethods:{
        
        
        
    }, instanceMethods:{
        
        
        
        
    }})
}