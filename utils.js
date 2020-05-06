function mungeLocation(locationData) {
    try {
        const firstItem = locationData[0];
    
            //taking the location data and returning the first 
        return {
            
            //.display_name, .lat, .lon comes from hard coded data shape
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };

        //air handle to catch if fail
    } catch (e) {
        return {};
    }
}

function mungeWeather(weatherData) {
    try {
        const transformedData = weatherData.data.map((forecast) => {
            
            return {
               //.weather.description comes from hard coded data shape
                forecast: forecast.weather.description,
                time: forecast.valid_date
            };
        });
        //use the slice to do the forcast for the next 8 days
        return transformedData.slice(0, 8);
    } catch (e) {
        return [{}];
    }
}
module.exports = {
    mungeLocation,
    mungeWeather
};