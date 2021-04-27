const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roleSchema = new Schema ({
    name: {type: String, required: true},
    versionKey: false
});

module.exports = mongoose.model('role', roleSchema);