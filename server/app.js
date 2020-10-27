// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const topSpotsData = require('./data.json');

var bodyParser = require('body-parser');

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.status(200).send("It's working");
});

app.get('/data', function(req, res) {
    res.json(topSpotsData);
});

// finally export the express application
module.exports = app;
