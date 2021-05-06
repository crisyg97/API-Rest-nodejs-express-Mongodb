const modelRole = require('../models/role')
const promise = require('promise');
const ctrl = {};

ctrl.createRoles =  async () => {
//module.exports = function createRoles () {
    try{
        //console.log('funciona');
        //check for existing roles
        const count =  await modelRole.estimatedDocumentCount();
        console.log(count);
        if(count > 0) return;
        const values =  Promise.all ([
            new modelRole({name: "user"}).save(),
            new modelRole({name: "admin"}).save(),
            new modelRole({name: "moderator"}).save()
        ]);
        console.log(values);
    }catch(err){
        console.log(err);
    }
    /*const user = new role({
        name: "user"
    });
    const admin = new role({
        name: "admin"
    });
    const moderator = new role({
        name: "moderator"
    });
    user.save();
    admin.save();
    moderator.save();*/ 
};

module.exports = ctrl;
