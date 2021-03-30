const mongoose = require('mongoose');
const Schema = mongoose.Shema;

const carSchema = new Schema ({
    brand: String,
    model: String,
    fuel: String,
    category: String,
    transmission: String,
    origin: String,
    year: String,
    Status: {type: String, enum: ['ACTIVE','INACTIVE'], required: true}
});

module.exports = moongose.model('user', carSchema);