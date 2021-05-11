const index = {};
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const modelUser = require('../models/user');
const modelrole = require('../models/role');

index.verifyToken = (req, res, next) => {
    try{
        const token = req.headers["X-Access-Token"];
    
        //token exists?
        if(!token){
            return res.status(403).json({message:"no token provided"});
        }
    
        //token validation
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decode);
    
        const userFound = modelUser.findById(decoded.id, {password: 0});
        if(!userFound){
            return res.status(404).json({message: 'user not found'});
        }
        next();
    }catch(err){
        return res.status(401).json({message: "unauthorized"});
    }
}

index.isModerator = async (res,req,next) => {
    const user =  await modelUser.findById(req.id);
    const roles = await modelRole.find({ _id: {$in : user.roles } });

    for(let i=0; i < roles.length; i++){
        if(roles[i].name === "moderator"){
            next();
            return;
        }
    }
    return res.status(403).json({message: "required role moderator"})
}
index.isAdmin = async (res,req,next) => {
    const user =  await modelUser.findById(req.id);
    const roles = await modelRole.find({ _id: {$in : user.roles } });

    for(let i =0; i < roles.length; i++){
        if(roles[i].name === "admin"){
            next();
            return;
        }
    }
    return res.status(403).json({message: "required role admin"})

}

module.exports = index;
