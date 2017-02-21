module.exports = function (sequelize, DataTypes) {
    return sequelize.define("sessions", {
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