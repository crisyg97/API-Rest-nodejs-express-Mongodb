const User = require('../models/user');
const ctrl = {};

ctrl.index = async (req, res) => {
   const users = await User.find().populate('car'); 
   res.status(200).json(users);
};

ctrl.create = async (req, res) => {
   const body = req.body;
   const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      dni: body.dni,
      mail: body.mail,
      cars: body.cars,
      Status: 'ACTIVE'
   });
   await user.save();
   res.status(200).json(user);
}

ctrl.update = async (req,res) => {
   const id = req.params.user_id;
   const body = req.body;
   User.findOne({_id:id}, (err,user) => {
      if(err) {console.log(err)}
      else
         if(!user) {console.log('user not found')}
         else {
            user.firstName = body.firstName,
            user.lastName = body.lastName,
            user.dni = body.dni,
            user.mail = body.mail,
            user.cars = body.cars,
            user.Status = body.Status
         }
         const userSave = await user.save();
         res.status(200).json(user);
   })
}

ctrl.remove = async (req, res) => {
   const id = req.params.user_id;
   const body = req.body;
   User.findOne( {_id: id}, (err,user) => {
      if(err) {console.log(err)}
      else
         if(!user) {console.log('user not found')}
         else {
            user.Status = 'INACTIVE';
         }
         await user.save();
         res.status(200).json();
   });
}
module.exports = ctrl;
