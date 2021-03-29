const mongoose = require('moongoose');
const Shema = mongoose.Shema;

const carShema = new Shema ({
    brand: String,
    model: String,
    fuel: String,
    category: String,
    transmission: String,
    origin: String,
    year: String,
    Status: {type: String, enum: ['ACTIVE','INACTIVE'], required: true}
});

module.exports = moongose.model('user', carShema);