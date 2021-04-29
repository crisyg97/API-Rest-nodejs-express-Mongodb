const modelUser = require('../models/user');
const ctrl = {};

ctrl.signup = async (req, res) => {
    const body = req.body;
    const user = new modelUser({
        username: body.username,
        password: await modelUser.encryptPassword(body.password), //save the encrypted password
        firstname: body.firstname,
        lastName: body.lastName,
        dni: body.dni,
        mail: body.mail,
        cars: body.cars,
        roles: body.roles,
        status: 'ACTIVE'
    });
    await user.save();
    console.log(user);
    res.json('signup');

};

ctrl.signin = (req, res) => {

};

module.exports = ctrl;