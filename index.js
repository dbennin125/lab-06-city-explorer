const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) =>{
    console.log('anything');
    res.json({ 
        'Welcome': 'Let\'s go!',

    });
});


app.get('/location', (req, res) =>{
    console.log('anything');
    res.json({ 
        'formatted_query': 'Seattle, WA, USA',
        'latitude': '47.606210',
        'longitude': '-122.332071'
    });
});

app.get('/weather', (req, res) =>{
    console.log('anything');
    res.json({ 
        'Does it work': 'yes it does'
    });
});


app.listen(PORT, () => console.log(`running on port${PORT}`));