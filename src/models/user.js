const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    firstName: String,
    lastName: String,
    dni: String,
    mail: String,
    cars: [{
        carId: {type: Schema.Types.ObjectId, ref: 'car'}
    }],
    status: {type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE'}
});

module.exports = mongoose.model('user', userSchema);