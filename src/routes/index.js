const express = require('express');
const app = express();
const router = express.Router();

const user = require('../controllers/user');

module.exports = app => {
    router.get('/user', us  er.index);
    router.post('/user/add', user.create);
    router.post('/user/:user_id/update', user.update);
    router.delete('/user/:user_id/delete', user.remove);

    app.use(router);
};