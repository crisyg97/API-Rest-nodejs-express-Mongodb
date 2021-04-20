const Car = require('../models/car');
const ctrl = {};

ctrl.index = (req, res) => {
    Car.find((err,car) => {
        if(err) {console.log(err)}
        res.send({
            car : car
        })       
    })
}

ctrl.create = (req, res) => {
    const body = req.body;
    const car = new Car({
        brand: body.brand,
        model: body.model,
        fuel: body.fuel,
        category: body.category,
        transmission: body.transmission,
        origin: body.origin,
        year: body.year,
        status: 'ACTIVE'
    })
    Car.save((err) => {
        if(err) {console.log(err)}
        res.send({
            success: true
        })
    });
}

ctrl.update = (req, res) => {
    const id = req.params.car_id;
    const body = req.body;
    Car.findOne( {_id: id}, (err, car) => {
        if(err) {console.log(err)}
        else
            if(!car) {console.log('car not found')}
            else{
                car.brand = body.brand,
                car.model = body.model,
                car.fuel = body.fuel,
                car.category = body.category,
                car.transmission = body.transmission,
                car.origin = body.origin,
                car.year = body.year,
                car.status = body.status
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
    const id = req.params.car_id;
    const body = req.body;
    Car.findOne( {_id: id}, (err,car) => {
        if(err) {console.log(err)}
        else
           if(!user) {console.log('car not found')}
           else {
              car.status = 'INACTIVE';
        
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