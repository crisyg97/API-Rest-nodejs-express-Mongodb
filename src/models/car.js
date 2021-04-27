const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var carSchema = new Schema ({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    fuel: {type: String, required: true},
    category: {type: String, required: true},
    transmission: {type: String, required: true},
    origin: {type: String, required: true},
    year: {type: String, required: true},
    status: {type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE', required: true}
});

module.exports = mongoose.model('car', carSchema);