const modelRole = require('../models/role')
const promise = require('promise');
const ctrl = {};

ctrl.createRoles =  async () => {
    try{
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
};

module.exports = ctrl;
