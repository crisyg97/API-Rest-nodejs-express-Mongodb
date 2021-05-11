const index = {};
const modelRole = require('../models/role');
const modelUser = require('../models/user');

index.checkDuplicatedUserOrEmail = async (req, res, next) => {
    const userFound = await modelUser.findOne({_id: req.body.id} )
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