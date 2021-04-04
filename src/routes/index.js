const express = require('express');
const app = express();
const router = express.Router();

const user = require('../controllers/user');

module.exports = app => {
    router.get('/', (req,res) => {
        res.send('hello world');
    })

    router.get('/user', user.index);
    router.post('/user/add', user.create);
    router.post('/user/:user_id/update', user.update);
    router.delete('/user/:user_id/delete', user.remove);

    router.get('/car', user.index);
    router.post('/car/add', user.create);
    router.post('/car/:car_id/update', user.update);
    router.delete('/car/:car_id/delete', user.remove);

    app.use(router);
};