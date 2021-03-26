const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});