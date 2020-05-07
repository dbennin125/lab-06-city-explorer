const request = require('superagent');
const dotenv = require('dotenv');
dotenv.config();
//get the dotenv and config
const express = require('express');
const cors = require('cors');
//get the express with cors

const { mungeLocation, mungeWeather } = require('./utils.js');
const locationData = require('./data/geo.json');
const weatherData = require('./data/weather.json');

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
        const properLocation = mungeLocation(locationData);
        const data = await request.get();
        res.json(properLocation);
    } catch (e) {
        res.json({
            status: 500,
            responseText: `Sorry, it seems something went wrong`,
            e,
        });
    }
});

app.get('/weather', (req, res) =>{
    try {
        // console.log('anything');
        const forecast = mungeWeather(weatherData);
        res.json(forecast);
    } catch (e) {
        res.json({
            status: 500,
            responseText: `Sorry, it seems something went wrong`,
            e,
        });
    }
});


app.listen(PORT, () => console.log(`running on port${PORT}`));