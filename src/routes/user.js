const express = require('express');
const router = express.Router();

const user = require('../controllers/user');

router.get('/', user.index);
router.post('/add', user.create);
router.put('/:user_id/update', user.update);
router.delete('/:user_id/delete', user.remove);

module.exports = router;