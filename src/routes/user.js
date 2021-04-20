const express = require('express');
const router = express.Router();

const user = require('../controllers/user');

router.get('/user', user.index);
router.post('/user/add', user.create);
router.put('/user/:user_id/update', user.update);
router.delete('/user/:user_id/delete', user.remove);

module.exports = router;