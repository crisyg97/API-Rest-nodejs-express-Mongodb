const mongoose = require('moongoose');
const Shema = mongoose.Shema;

const userShema = new Shema({
    dni: String,
    firstName: String,
    lastNmae: String,
    mail: String,
    cars: [{
        type: Shemma.types.ObjectId,
        ref: car
    }],
    Status: {type: String, enum: ['ACTIVE','INACTIVE'], required: true}
});

module.exports = moongose.model('user', userShema);