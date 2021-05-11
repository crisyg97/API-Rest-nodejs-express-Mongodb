const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const authJwt = require('../middleware/authJwt');
const verifySignup = require('../middleware/validationSignup');
const user = require('../controllers/user');

router.get('/', user.index);
router.get('/:user_id',user.getById);
router.post('/add', [ authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExists ], user.create);
router.put('/:user_id/update',[authJwt.verifyToken, authJwt.isAdmin], user.update);
router.delete('/:user_id/delete',[authJwt.verifyToken, authJwt.isAdmin], user.remove);

module.exports = router;