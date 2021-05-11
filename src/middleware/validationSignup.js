const index = {};
const modelRole = require('../models/role');
const modelUser = require('../models/user');

index.checkDuplicatedUserOrEmail = async (req, res, next) => {
    const usernameFound = await modelUser.findOne({username: req.body.username});
    if(usernameFound){
        return res.status(400).json({message: 'user already exists'});
    }
    const emailFound = await modelUser.findOne({email: req.body.email});
    if(emailFound){
        return res.status(400).json({message: 'email already exists'});
    }
    next();
}

//not Create roles nonexistent
index.checkRolesExists = async (req, res, next) => {
    const reqRoles = req.body.roles;
    const roles = await modelRole.find();
    if(reqRoles){ //if roles not empty
        for(let i=0; i < reqRoles.length; i++){
            if(!roles.includes(reqRoles[i])){ //verify that the roles are in the database
                return res.status(400).json({ message: 'role ${reqRoles[i]} does not exists'})
            }
        }
    }
    next();
}

module.exports = index;