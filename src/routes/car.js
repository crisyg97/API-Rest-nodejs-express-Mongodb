const express = require('express');
const router = express.Router();

const car = require('../controllers/car');
        
router.get('/car', car.index);
router.post('/car/add', car.create);
router.put('/car/:car_id/update', car.update);
router.delete('/car/:car_id/delete', car.remove);

module.exports = router;