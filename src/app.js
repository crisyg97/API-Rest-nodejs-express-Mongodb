const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/index');

app.set('port', process.env.PORT || 3000);

const mongooseConnect = require('./mongoDbConnect');
const db = mongooseConnect.connect();
//mongooseConnect.Promise = global.Promise;

//midleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(routes);


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});