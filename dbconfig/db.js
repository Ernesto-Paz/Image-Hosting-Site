/* set up of sequelize database */
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development"
if (env === "production") {
var sequelize = new                               
    Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        logging: console.log 
    });
} else {
var sequelize = new 
    Sequelize(undefined, undefined, undefined, {
        dialect: "sqlite",
        storage: __dirname + "/data/dev-todo-api.sqlite",
        logging: false
    });
}

var db = {};

db.album = sequelize.import(__dirname + "/models/album.js");
db.image = sequelize.import(__dirname + "/models/image.js");
db.sessions = sequelize.import(__dirname + "/models/sessions.js");
db.user = sequelize.import(__dirname + "/models/user.js");

//album has many images
//images belong to albums
//user has many albums

db.user.hasMany(db.album);
db.user.hasMany(db.image);
db.sessions.hasOne(db.user);
db.album.belongsTo(db.user);
db.image.belongsTo(db.user);
db.album.belongsToMany(db.image, {through: "AlbumImage"});
db.image.belongsToMany(db.album, {through: "AlbumImage"});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.todo.belongsTo(db.users);
//db.users.hasMany(db.todo);

module.exports = db;