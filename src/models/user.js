const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dni: {type: String, required: true},
    mail: {type: String, required: true},
    cars: [{
        carId: {type: Schema.Types.ObjectId, ref: 'car'}
    }],
    hierarchy: {type: String, required: true},
    status: {type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE', required: true}
});

module.exports = mongoose.model('user', userSchema);