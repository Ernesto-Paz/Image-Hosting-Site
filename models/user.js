var bcrypt = require("bcrypt");
var crypto = require("crypto-js");
var jwt = require("jsonwebtoken");

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [1, 100]
                }
            },
            passwordHash: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.VIRTUAL,
                allowNull: false,
                validate: {
                    len: [1, 100]
                },
                set: function (password) {
                    ///Asyncronous functions don't work inside of setters need to find another way.
                    this.setDataValue("password", password);
                }
            },
            adminLevel: {
                type: DataTypes.ENUM("StandardUser", "ModeratorUser", "AdminUser"),
                defaultValue: "StandardUser"
                // StandardUser, ModeratorUser, AdminUser
            }

        },

        {

            hooks: {
                beforeCreate: function (user, options, cb) {
                    user.setDataValue("username", user.username.toLowerCase())
                    bcrypt.hash(user.password, 10, function (err, hash) {
                        user.setDataValue("passwordHash", hash);
                        return cb(null, user);
                    });

                }



            },
            classMethods: {

                authenticateUser: function (body) {
                    return new Promise(function (resolve, reject) {
                        console.log("Authenticating Login.");
                        var username = body.username.toLowerCase();
                        user.findOne({
                            where: {
                                username: username
                            }
                        }).then(function (user) {
                            if(!user){
                            return reject("User not found.");
                            }
                            bcrypt.compare(body.password, user.passwordHash, function (err, result) {
                                if (result == true) {
                                    console.log("Correct password.")
                                    resolve({username: user.username, id: user.id});

                                } else {
                                    console.log("Incorrect password.")
                                    reject("False");
                                    // return reject invalid authentication 

                                }


                            })


                        }, function (err) {
                            console.log(err);
                            reject(err);
                            //return reject and error
                        })


                    }, function(err) {console.log(err);})



                }



            },
            instanceMethods: {


            }
        });
    
    return user;
}