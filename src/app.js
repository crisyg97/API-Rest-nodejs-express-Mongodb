const express = require('express');
      path = require("path");
      morgan = require('morgan');
      dotenv = require('dotenv').config();
      jwt = require('jsonwebtoken');
const roles = require('./lib/initialSetup');

const app = express();
//role creation
console.log(roles);
roles.createRoles;

app.set('key', process.env.KEY);

//port
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
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes
const user = require('./routes/user');
const car = require('./routes/car');
const auth = require('./routes/auth');

app.use('/api/user',user);
app.use('/api/car',car);
app.use('/api/auth', auth);

//connetion mongodb
const mongodb_conn_module = require('./mongodbConnect');
var db = mongodb_conn_module.connect();
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port')); 
});



