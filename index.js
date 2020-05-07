const request = require('superagent');
const dotenv = require('dotenv');
dotenv.config();
//get the dotenv and config
const express = require('express');
const cors = require('cors');
//get the express with cors
const { mungeLocation } = require('./utils.js');
const locationData = require('./data/geo.json.js');
// const weatherData = require('./data/weather.json.js');
//get your functions and data from 


const PORT = process.env.PORT || 3000;
//port works
const app = express();

app.use(cors());

app.get('/', (req, res) =>{
    // console.log('anything'); works
    res.json({ 
        'Welcome': 'Let\'s go!',

    });
});


app.get('/location', (req, res) =>{
    // console.log('anything'); works 
    const properLocation = mungeLocation(locationData);
    
    res.json(properLocation);
});

app.get('/weather', (req, res) =>{
    // console.log('anything');
    res.json({ 
        'Does it work': 'yes it does'
    });
});


app.listen(PORT, () => console.log(`running on port${PORT}`));