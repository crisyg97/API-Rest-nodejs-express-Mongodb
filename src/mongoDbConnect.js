const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017";

module.exports.connect = () => {
    mongoose.connect(uri, {dbName: "api-rest", useNewUrlParser: true});
    var db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
      });
    return db;
};