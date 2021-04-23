const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var carSchema = new Schema ({
    brand: String,
    model: String,
    fuel: String,
    category: String,
    transmission: String,
    origin: String,
    year: String,
    status: {type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE'}
});

module.exports = mongoose.model('car', carSchema);