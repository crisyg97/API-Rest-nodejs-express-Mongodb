const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017";
const databaseName = "/api_rest";

module.exports.connect = function() {
  mongoose.connect(uri + databaseName , {useNewUrlParser: true, useUnifiedTopology: true});
  var db = mongoose.connection;
  db.once("open", function(callback){
    console.log("Connection Succeeded");
  });  
  db.on("error", console.error.bind(console, "connection error"));
  return db;
}