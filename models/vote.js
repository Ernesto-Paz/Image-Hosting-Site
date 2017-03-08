module.exports = function (sequelize, DataTypes) {
    var vote = sequelize.define("vote", {
        vote: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: -1,
                max: 1,
                isInt: true
            }
        }

    }, {
        hooks: {




        },
        classMethods: {


        },
        instanceMethods: {




        }
    })

    return vote;
}