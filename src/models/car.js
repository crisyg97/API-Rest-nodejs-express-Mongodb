const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var carSchema = new Schema ({
    brand: {type: String, require: true},
    model: {type: String, require: true},
    fuel: String,
    category: String,
    transmission: String,
    origin: String,
    year: String,
    status: {type: String, enum: ['ACTIVE','INACTIVE'], require: true}
});

module.exports = mongoose.model('car', carSchema);