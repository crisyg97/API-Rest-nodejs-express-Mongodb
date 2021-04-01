const express = require('express');
const config = require('./config');
const app = config(express());

//connetion mongodb
const mongooseConnect = require('./mongoDbConnect');
const db = mongooseConnect.connect();

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});