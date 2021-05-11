const express = require('express');
const router = express.Router();

const authValidation = require('../middleware/authJwt');
const car = require('../controllers/car');
console.log(authValidation.verifyToken);

router.get('/', car.index);
router.post('/add',[authValidation.verifyToken, authValidation.isModerator], car.create);
router.put('/:car_id/update',[authValidation.verifyToken, authValidation.isAdmin], car.update);
router.delete('/:car_id/delete',[authValidation.verifyToken, authValidation.isAdmin], car.remove);

module.exports = router;