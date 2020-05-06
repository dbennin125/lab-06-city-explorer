const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/location/:id', (req, res) =>{
    // console.log('anything');
    res.json({ 
        'formatted_query': 'Seattle, WA, USA',
        'latitude': '47.606210',
        'longitude': '-122.332071'
    });
});


app.listen(PORT, () => console.log(`running on port${PORT}`));