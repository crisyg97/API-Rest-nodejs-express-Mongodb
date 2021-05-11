const express = require('express');
const router = express.Router();

const validationSignup = require('../middleware/validationSignup');
const auth = require('../controllers/auth');

router.post('/signup',[validationSignup.checkDuplicatedUserOrEmail, validationSignup.checkRolesExists], auth.signup);
router.post('/signin', auth.signin);

module.exports = router;