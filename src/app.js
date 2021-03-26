const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);

const mongooseConnect = require('./mongoDbConnect');
const db = mongooseConnect.connect();

//midleware
app.use(morgan('dev'));
app.use(express.json());


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});