const express = require('express');
const config = require('./config');


const index = require('./routes/index');

//connetion mongodb
const mongodb_conn_module = require('./mongodbConnect');
var db = mongodb_conn_module.connect();

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});