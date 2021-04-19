const User = require('../models/user');
const ctrl = {};

ctrl.index = (req, res) => {
   User.find((err, userDb) => {
      if (err) {console.log(err)}
      console.log(userDb);
      res.send({
         user: userDb
      });
   }).populate('car');
};

ctrl.create = (req, res) => {
   const body = req.body;
   console.log(body);
   const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      dni: body.dni,
      mail: body.mail,
      cars: body.cars,
      Status: 'ACTIVE'
   });
   User.save((err) => {
      if(err) {console.log(err)}
      res.send({
          success: true
      })
   });
}

ctrl.update = (req,res) => {
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
         user.save((err) => {
                if(err) {console.log(err)}
                res.send({
                    success: true
                })
         });
   })
}

ctrl.remove = (req, res) => {
   const id = req.params.user_id;
   const body = req.body;
   User.findOne( {_id: id}, (err,user) => {
      if(err) {console.log(err)}
      else
         if(!user) {console.log('user not found')}
         else {
            user.Status = 'INACTIVE';
      
            save((err) => {
               if(err) {console.log(err)}
               res.send({
                  success: true
               })
            });
         }
   });
}
module.exports = ctrl;
