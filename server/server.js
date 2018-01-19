const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios')
const weather = require('./weather');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
}

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/weather', function (req, res) {
    const city = req.body.city
    weather.fetchTheWeather(city, function (data) {
        res.send(data);
    });
});


console.log ('Server has started on port 8080');

app.listen(process.env.PORT || 8080);







