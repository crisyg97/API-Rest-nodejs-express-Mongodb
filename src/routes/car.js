const express = require('express');
const router = express.Router();

const car = require('../controllers/car');
        
router.get('/', car.index);
router.post('/add', car.create);
router.put('/:car_id/update', car.update);
router.delete('/:car_id/delete', car.remove);

module.exports = router;