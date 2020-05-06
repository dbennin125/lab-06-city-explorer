// IMPORT MODULES under test here:
const { mungeLocation, mungeWeather } = require('../utils.js');
//importing in the from utils the functions mungeLocation
//hard coded data
const data = require('../data/geo.json');
//data from 
const weather = require('../data/weather.json');
//importing in the hard coded data directory
const test = QUnit.test;

test('should return data for portland when given portland api response', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    //this was the first Portland in the array
    const expected = {
        'formatted_query': 'Portland, Multnomah County, Oregon, USA',
        'latitude': '45.5202471',
        'longitude': '-122.6741949'
    };
    //Act 
    // Call the function you're testing and set the result to a const
   
    //using the function to eat the data and return the first portland.
    const results = mungeLocation(data);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});


test('make sure the air handle for mungeLocation works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {};
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeLocation(null);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('should return weather data for portland when given portland weather api response', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [
        {
            'forecast': 'Scattered clouds',
            'time': '2020-05-05'
        },
        {
            'forecast': 'Light snow',
            'time': '2020-05-06'
        },
        {
            'forecast': 'Few clouds',
            'time': '2020-05-07'
        },
        {
            'forecast': 'Few clouds',
            'time': '2020-05-08'
        },
        {
            'forecast': 'Broken clouds',
            'time': '2020-05-09'
        },
        {
            'forecast': 'Overcast clouds',
            'time': '2020-05-10'
        },
        {
            'forecast': 'Overcast clouds',
            'time': '2020-05-11'
        },
        {
            'forecast': 'Light rain',
            'time': '2020-05-12'
        },
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeWeather(weather);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});


test('make sure the air handle for mungeWeather works', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{}];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeWeather(null);
    
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});