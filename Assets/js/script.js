fetch('https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={your_api_key}')
    .then(response => response.json())
    .then(data => {
        // Process the weather data here
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });