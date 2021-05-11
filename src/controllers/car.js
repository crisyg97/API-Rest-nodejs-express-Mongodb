const modelCar = require('../models/car');
const ctrl = {};

ctrl.index = async (req, res) => {
    await modelCar.find((err,car) => {
        if(err) {console.log(err)}
        res.send({
            car : car
        })       
    })
}

ctrl.create = async (req, res) => {
    console.log(req.body);
    const body = req.body;
    const car = new modelCar({
        brand: body.brand,
        model: body.model,
        fuel: body.fuel,
        category: body.category,
        transmission: body.transmission,
        origin: body.origin,
        year: body.year,
        status: 'ACTIVE'
    });
    await modelCar.save((err) => {
        if(err) {console.log(err)}
        res.send({
            success: true
        });
    });
}

ctrl.update = async (req, res) => {
    const id = req.params.car_id;
    const body = req.body;
    console.log(body);
    await modelCar.findOne( {_id: id}, async (err, car) => {
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
            await car.save((err) => {
                if(err) {console.log(err)}
                res.send({
                    success: true
                })
            });
    })
}

ctrl.remove = async (req, res) => {
    const id = req.params.car_id;
    const body = req.body;
    modelCar.findOne( {_id: id}, (err,car) => {
        if(err) {console.log(err)}
        else
           if(!car) {console.log('car not found')}
           else {
              car.status = 'INACTIVE';
        
              car.save((err) => {
                 if(err) {console.log(err)}
                 res.send({
                    success: true
                 })
              });
           }
     });
}

module.exports = ctrl;