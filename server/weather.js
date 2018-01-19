const axios = require('axios');

var fetchTheWeather = (city, callback) => {

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+IT&key=AIzaSyBvdx8ccZd8hTKp-69dFvvwRLiM4PojBUo`;

    var cityCorrectName;

axios.get(geocodeUrl).then((response) => {
     
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/a4bd1aaf575dc483dd6b1dce0be3c9ca/${lat},${lng}?units=si`;
    console.log(response.data.results[0].formatted_address);
    cityCorrectName = response.data.results[0].address_components[0].short_name
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var icon = response.data.currently.icon
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Ci sono ${temperature} gradi a ${cityCorrectName}. It feels like ${apparentTemperature}.`);
    callback({temperature: temperature, city: cityCorrectName, weatherIcon: icon})
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});


}

module.exports.fetchTheWeather = fetchTheWeather