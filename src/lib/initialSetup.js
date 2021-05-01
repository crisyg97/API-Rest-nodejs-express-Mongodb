const modelRole = require('../models/role')
ctrl = {};

ctrl.createRoles = async () => {
    console.log('funciona');
    try{
        //check for existing roles
        const count = await modelRole.estimatedDocumentCount();
        if(count > 0) return;
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
        const values = await Promises.all ([
            new modelRole({name: "user"}).save(),
            new modelRole({name: "admin"}).save(),
            new modelRole({name: "moderator"}).save()
        ]);
        console.log(values);
    }catch(err){
        console.log(err);
    }
}
console.log(ctrl);
module.export = ctrl;
