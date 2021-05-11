const modelUser = require('../models/user');
const modelRole = require('../models/role');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const ctrl = {};

ctrl.signup = async (req, res) => {
    const body = req.body;
    //verify user
    const userFound = modelUser.find(body.mail);
    
    const newUser = new modelUser({
        username: body.username,
        password: await modelUser.encryptPassword(body.password), //save the encrypted password
        firstName: body.firstName,
        lastName: body.lastName,
        dni: body.dni,
        email: body.email,
        cars: body.cars,
        roles: body.roles,
        status: 'ACTIVE'
    });
    //relationship roles with users
    if(body.roles){
        const foundRoles = await modelRole.find({name: {$in: body.roles }});//save the roles that the user has
        newUser.roles = foundRoles.map(role => role._id);  //select the _id  
    }else{
        const role = await modelRole.findOne({name :"user"});
        newUser.roles = [role._id]; //in array role save the _id
    }

    const saveUser = await newUser.save();
    //create token
    const token = jwt.sign({id: saveUser._id}, process.env.SECRET, {
        expiresIn: 3600 //seconds, 1 hour
    });

    res.json(token);

};

ctrl.signin = async (req, res) => {
    const body = req.body;
    const userFound = await modelUser.findOne({email: body.email}).populate("roles");
    //console.log(userFound);
    if(!userFound){
        return res.status(404).json({message: 'user not found'});
    }
    //validation password
    const comparationResult = await modelUser.comparePassword(body.password, userFound.password);
    console.log(comparationResult);
    if(!comparationResult){
        return res.status(400).json({message: "invalid password"});
    }

    const token = await jwt.sign({id: userFound._id }, process.env.SECRET, {
        expiresIn: 3600 //seconds, 1 hour
    });
    res.json({token: ''});
};

module.exports = ctrl;