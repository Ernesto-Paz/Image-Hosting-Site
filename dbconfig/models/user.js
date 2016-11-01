var bcrypt = require("bcrypt");
var crypto = require("crypto-js");
var jwt = require("jsonwebtoken");

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordHash:{
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false, 
            validate: { len:[1, 100] }
            
        }
    })
}
