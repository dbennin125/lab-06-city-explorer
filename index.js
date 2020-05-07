const request = require('superagent');
const dotenv = require('dotenv');
dotenv.config();
console.log(dotenv);
//get the dotenv and config
const express = require('express');
const cors = require('cors');
//get the express with cors

const { mungeLocation, mungeWeather } = require('./utils.js');
// const locationData = require('./data/geo.json');
// const weatherData = require('./data/weather.json');

//get your functions and data from 


const PORT = process.env.PORT || 3000;
//port works
const app = express();

app.use(cors());

app.get('/', (req, res) =>{
    try {
        res.json({ 
            'Welcome': 'Let\'s go!',

        });
   
    } catch (e) {
        res.json({
            status: 500,
            responseText: `Sorry, it seems something went wrong`,
            e,
        });
    }
    
});


app.get('/location', async(req, res) =>{
    // console.log('anything'); works 
    try {
        const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_KEY}&q=${req.query.search}&format=json`);
        // console.log('||', data);
        const properLocation = mungeLocation(data.body);
        
        res.json(properLocation);
    } catch (e) {
        res.json({
            status: 500,
            responseText: `Sorry, it seems something went wrong`,
            e,
        });
    }
});

app.get('/weather', async(req, res) =>{
    try {
        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);
        // console.log('anything');
        const forecast = mungeWeather(data.body);
        res.json(forecast);
    } catch (e) {
        res.json({
            status: 500,
            responseText: `Sorry, it seems something went wrong`,
            e,
        });
    }
});

app.get('/hiking', async(req, res) =>{
    try {
        const data = await request.get(`https://www.hikingproject.com/data/get-trails?lat=${req.query.latitude}&lon=${req.query.longitude}&maxDistance=200&key=${process.env.HIKING_KEY}`);
        // console.log('anything');
        const hikingLocations = mungeLocation(data.body);
        res.json(hikingLocations);
    } catch (e) {
        res.json({
            status: 500,
            responseText: `Sorry, it seems something went wrong`,
            e,
        });
    }
});


app.listen(PORT, () => console.log(`running on port${PORT}`));