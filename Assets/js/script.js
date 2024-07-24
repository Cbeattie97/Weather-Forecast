const apikey = 'b1d37a48ccb7f9d8312823944d366698';
const searchCity = document.getElementById('searchCity');
const searchBtn = document.getElementById('searchBtn');
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';

// add an event listener to the search button and search for the desired city
searchBtn.addEventListener('click', () => {
    const city = searchCity.value;
    const url = `${baseURL}?q=${city}&appid=${apikey}&units=metric`; 

    getWeatherData(url)
});

// fetch the weather data from the open weather API
function getWeatherData(url) { 
 fetch(url) 
        .then(response => response.json())
        .then(data => { console.log(data);
            const {city, list} = data;
            const {name} = city;
            const {main, weather} = list[0];
            const {temp, humidity} = main;
            const {description} = weather[0];
            const {speed} = list[0].wind;
            console.log(`Location: ${name}`);
            console.log(`Temperature: ${temp}°C`);
            console.log(`Humidity: ${humidity}%`);
            console.log(`${description}`);

            // append these weather values to the DOM
            const currentWeather = document.getElementById('currentWeather');
            const weatherCard = createWeatherCard(name, temp, humidity, speed, description);
            currentWeather.appendChild(weatherCard);
console.log(list);
            for (let i=0;i< list.length; i+=8) {
                const forecastWeatherCard =createWeatherCard(list[i].main.temp, list[i].main.humidity, list[i].wind.speed);
                const forecastWeather = document.getElementById('forecastWeather');
                forecastWeather.appendChild(forecastWeatherCard);
        }
        })
        .catch(error => console.log('Error:', error));
}

// create a weather card element
function createWeatherCard( temp, humidity, wind) {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cityName = document.createElement('p');
    cityName.textContent = `Temperature: ${temp}°C`;

    const temperature = document.createElement('p');
    temperature.textContent = `Humidity: ${humidity}%`;

    const humidityLevel = document.createElement('p');
    humidityLevel.textContent = `Wind Speed: ${wind}M/Hr`;

    const weatherDescription = document.createElement('p');
    // weatherDescription.textContent = description ? `${description}` : '';

    cardContent.appendChild(cityName);
    cardContent.appendChild(temperature);
    cardContent.appendChild(humidityLevel);
    // cardContent.appendChild(weatherDescription);

    weatherCard.appendChild(cardContent);

    return weatherCard;
}

function createCurrentWeatherCard(name, temp, humidity, speed, description) {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cityName = document.createElement('p');
    cityName.textContent = `Name: ${name}`;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${temp}°C`;

    const humidityLevel = document.createElement('p');
    humidityLevel.textContent = `Humidity: ${humidity}%`;

    const speed = document.createElement('p');
    humidityLevel.textContent = `Wind Speed: ${speed}M/Hr`;

    const weatherDescription = document.createElement('p');
    weatherDescription.textContent = description ? `${description}` : '';

    cardContent.appendChild(cityName);
    cardContent.appendChild(temperature);
    cardContent.appendChild(humidityLevel);
    cardContent.appendChild(weatherDescription);

    weatherCard.appendChild(cardContent);

    return weatherCard;
}


