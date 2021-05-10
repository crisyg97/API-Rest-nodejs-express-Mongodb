const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var userSchema = new Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dni: {type: String, required: true},
    email: {type: String, required: true},
    cars: [{
        carId: {type: Schema.Types.ObjectId, ref: 'car'}
    }],
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'role',
    }],
    status: {type: String, enum: ['ACTIVE','INACTIVE'], default: 'ACTIVE', required: true}
}, {
    timestamp: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); //apply an algorithm, 10 times
    return bcrypt.hash(password, salt); //ciphertext
}
//receivedPassword = password entered by user
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

module.exports = mongoose.model('user', userSchema);