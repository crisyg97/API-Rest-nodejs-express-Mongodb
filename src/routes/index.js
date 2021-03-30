const express = require('express');
const app = express();
const router = express.Router();

const user = require('../controllers/user');

module.exports = app => {
    router.get('/', user.index);

    app.use(router);
};