const modelUser = require('../models/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const ctrl = {};

ctrl.signup = async (req, res) => {
    const body = req.body;
    //verify user
    const userFound = modelUser.find(body.mail);
    
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
    const saveUser = await user.save();
    //create token
    const token = jwt.sign({id: saveUser._id}, process.env.SECRET, {
        expiresIn: 3600 //seconds, 1 hour
    });

    res.json(token);

};

ctrl.signin = (req, res) => {

};

module.exports = ctrl;