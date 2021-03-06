'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
if(env === "production"){
    var sequelize = new                               
    Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        logging: false,
    });
    
}
else{
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.user.hasMany(db.album);
db.user.hasMany(db.image);
db.user.hasMany(db.vote);
db.user.hasOne(db.session);
db.image.hasMany(db.vote);


db.album.belongsTo(db.user);
db.image.belongsTo(db.user);
db.session.belongsTo(db.user);
db.vote.belongsTo(db.user);
db.vote.belongsTo(db.image);
db.album.belongsToMany(db.image, {through: "AlbumImage"});
db.image.belongsToMany(db.album, {through: "AlbumImage"});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
