const express = require('express');
const router = express.Router();

const authValidation = require('../middleware/authJwt');
const car = require('../controllers/car');

router.get('/', car.index);
router.post('/add',authValidation.verifyToken, car.create);
router.put('/:car_id/update', car.update);
router.delete('/:car_id/delete', car.remove);

module.exports = router;