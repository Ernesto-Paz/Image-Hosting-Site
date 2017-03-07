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
            getImageScore: function (imageId) {

                return new Promise(function (resolve, reject) {

                    console.log("getImageScore")
                    vote.findAll({
                        where: {
                            imageId: imageId
                        },
                        raw: true
                    }).then(function (votesarray) {
                        console.log("looked up votes!");

                        function votecounter(votesarray, index, storageobject) {
                            console.log("Votecounter Runs.")
                            if (typeof storageobject == "undefined") {
                                console.log("defining storage object")
                                storageobject = {};
                                storageobject.upvote = 0;
                                storageobject.downvote = 0;
                            }
                            if (votesarray[index].vote == 1) {
                                storageobject.upvote++;
                            } else if (votesarray[index].vote == -1) {
                                storageobject.downvote--;
                            }

                            if (index < votesarray.length) {
                                index++;
                                if (index >= votesarray.length) {
                                    storageobject.score = storageobject.downvote + storageobject.upvote;
                                    console.log(storageobject);
                                    resolve(storageobject);
                                } else {
                                    process.nextTick(() => votecounter(votesarray, index, storageobject));
                                }
                            }
                        }
                        if (votesarray.length > 0) {
                            votecounter(votesarray, 0);
                        } else {
                            var votecount = {};
                            votecount.upvote = 0;
                            votecount.downvote = 0;
                            votecount.score = 0;
                            console.log(votecount);
                            resolve(votecount);
                        }
                    })

                });

            }



        },
        instanceMethods: {




        }
    })

    return vote;
}