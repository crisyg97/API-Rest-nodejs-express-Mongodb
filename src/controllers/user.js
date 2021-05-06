const modelUser = require('../models/user');
const ctrl = {};

ctrl.index = (req, res) => {
   modelUser.find((err, userDb) => {
      if (err) {console.log(err)}
      console.log(userDb);
      res.send({
         user: userDb
      });
   }).populate('car');
};

ctrl.create =  (req, res) => {
   const body = req.body;
   console.log(body);
   const user = new modelUser({
      firstName: body.firstName,
      lastName: body.lastName,
      dni: body.dni,
      email: body.mail,
      cars: body.cars,
      status: 'ACTIVE'
   });
   user.save((err) => {
      if(err) {console.log(err)}
      res.send({
          success: true
      })
   });
}

ctrl.update = (req,res) => {
   const id = req.params.user_id;
   const body = req.body;
   modelUser.findOne({_id:id}, (err,user) => {
      if(err) {console.log(err)}
      else
         if(!user) {console.log('user not found')}
         else {
            user.firstName = body.firstName,
            user.lastName = body.lastName,
            user.dni = body.dni,
            user.email = body.mail,
            user.cars = body.cars,
            user.Status = body.Status
         }
         user.save((err) => {
                if(err) {console.log(err)}
                res.send({
                    success: true
                });
         });
   })
}

ctrl.remove = (req, res) => {
   const id = req.params.user_id;
   const body = req.body;
   modelUser.findOne( {_id: id}, (err,user) => {
      if(err) {console.log(err)}
      else
         if(!user) {console.log('user not found')}
         else {
            user.status = 'INACTIVE';
      
            user.save((err) => {
               if(err) {console.log(err)}
               res.send({
                  success: true
               });
            });
         }
   });
}
module.exports = ctrl;
