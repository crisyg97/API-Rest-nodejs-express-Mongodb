const modelUser = require('../models/user');
const modelRole = require('../models/role');
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
        firstname: body.firstname,
        lastName: body.lastName,
        dni: body.dni,
        mail: body.mail,
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
    const userFound = await modelUser.findOne({email: body.email});
    
    if(!userFound){
        return res.status(400).json({message: 'user not found'});
    }
    res.json({token: ''});
};

module.exports = ctrl;