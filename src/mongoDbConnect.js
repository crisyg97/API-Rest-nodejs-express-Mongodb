const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017";
const databaseName = "/api_rest";

module.exports.connect = function() {
  mongoose.connect(uri + databaseName , {useNewUrlParser: true, useUnifiedTopology: true});
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function(callback){
    console.log("Connection Succeeded");
  });    
  return db;
}

/*module.export = function connect() {
  MongoClient.connect('mongodb://localhost:27017/api_rest', {useNewUrlParser: true, useUnifiedTopology: true} , (err,db) => {
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
      console.log("Connection Succeeded");
    });
  });
  const db = client.db('api_rest');
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function(callback){
      console.log("Connection Succeeded");
  });
  return db; 
};

/*
module.exports.connect = () => {
  mongoose.connect(uri, {useNewUrlParser: true});
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function(callback){
      console.log("Connection Succeeded");
    });
  return db;  
};
*/