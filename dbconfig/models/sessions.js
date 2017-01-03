module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user", {
        sessionid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastused:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        }

    }, {hooks:{
        
        
        
        
    }, classMethods:{
        
        
        
    }, instanceMethods:{
        
        
        
        
    }})
}