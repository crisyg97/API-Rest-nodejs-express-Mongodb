const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const predefinedRoles = ["user","admin","moderator"];

var roleSchema = new Schema ({
    name: {type: String, required: true},
    versionKey: false
});

module.exports = mongoose.model('role', roleSchema);