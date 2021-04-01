const morgan = require('morgan');
const express = require('express');
const app = express();
const routes = require('./routes/index');

module.exports = app => {
    app.set('port', process.env.PORT || 3000);

    //middleware
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    //routes
    routes(app);

    return app;
}