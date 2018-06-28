const express = require('express'),
        bodyParser = require('body-parser'),
        logger = require('morgan');


const app = express();

//////////// MIDDLEWARES

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/////// MIDDLEWARES

app.use('/api/convert', apiConvert);

app.get('/', (req, res) => {
    res.send('Welcome to iconvert API');
});