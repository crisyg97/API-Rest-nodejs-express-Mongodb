const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    dni: String,
    mail: String,
    cars: [{
        carId: {type: Schema.Types.ObjectId, ref: 'car'}
    }],
    status: {type: String, enum: ['ACTIVE','INACTIVE'], required: true}
});

module.exports = mongoose.model('user', userSchema);