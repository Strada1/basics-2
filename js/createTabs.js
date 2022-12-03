import { WEATHER_CLASS, HEART} from './constants.js';
import { storage } from './cities.js';
const CELSIUS = '\u2103';

function createTabNow(weatherCity){
    let tab = document.createElement('div');
    tab.className = WEATHER_CLASS.NOW;

    let temp = document.createElement('div');
    temp.className = 'now__temperature';
    temp.textContent = weatherCity.temperature + CELSIUS;
    
    let img = document.createElement('img');
    img.className = 'now__picture';
    img.src = getImageURL(weatherCity.weather[0].icon);

    let city = document.createElement('div');
    city.className = 'now__city';

    let nameCity = document.createElement('div');
    nameCity.className = 'now__name-city';
    nameCity.textContent = weatherCity.city;

    let addCity = document.createElement('img');
    addCity.className = 'now__add-city';
    addCity.src = storage.checkCity(weatherCity.city) ?
        HEART.FILL : HEART.EMPTY;

    city.append(nameCity, addCity);
    tab.append(temp, img, city);
    return tab;
}

function createTabDetails(weatherCity){
    let tab = document.createElement('div');
    tab.className = WEATHER_CLASS.DETAILS;

    let city = document.createElement('div');
    city.className = 'details__city';
    city.textContent = weatherCity.city;

    let listDetails = document.createElement('ul');
    listDetails.className = 'details__list-details';

    let temperature = document.createElement('li');
    temperature.textContent = `Температура: ${weatherCity.temperature}${CELSIUS}`;
    let feels_like = document.createElement('li');
    feels_like.textContent = `Ощущается: ${weatherCity.feels_like}${CELSIUS}`;
    let weather = document.createElement('li');
    weather.textContent = `Погода: ${weatherCity.weather[0].description}`;
    let sunrise = document.createElement('li');
    sunrise.textContent = `Восход солнца: ${weatherCity.sunrise + ''}`;
    let sunset = document.createElement('li');
    sunset.textContent = `Заход солнца: ${weatherCity.sunset}`;

    listDetails.append(temperature, feels_like, weather, sunrise, sunset);
    tab.append(city, listDetails);

    return tab;
}

function createTabForecast(weatherCityWithArr){
    let tab = document.createElement('div');
    tab.className = WEATHER_CLASS.FORECAST;

    let  city = document.createElement('div');
    city.className = 'forecast__city';
    city.textContent = weatherCityWithArr.name;

    let listCard = document.createElement('div');
    listCard.className = 'list-card';

    let cards = weatherCityWithArr.list.map(element =>
        createCardForecast(element));
    
    listCard.append(...cards);
    tab.append(city, listCard);
    return tab;
}

function createCardForecast(element){
    let card = document.createElement('div');
    card.className = 'card-weather';
    let dateTime = element.dt_txt.split(' ');
    let date = document.createElement('div');
    date.textContent = dateTime[0];
    let time = document.createElement('div');
    time.textContent = dateTime[1];

    let temperature = document.createElement('div');
    temperature.textContent = `Температура: ${Math.round(element.main.temp)}${CELSIUS}`;
    let feels_like = document.createElement('div');
    feels_like.textContent = `Ощущается: ${Math.round(element.main.feels_like)}${CELSIUS}`;
    let weather = document.createElement('div');
    weather.textContent = `${element.weather[0].main}`;

    let container = document.createElement('div');
    container.className = 'card-weather__picture';
    let img = document.createElement('img');
    img.src = getImageURL(element.weather[0].icon);
    container.append(img);

    card.append(date, time, temperature, weather, feels_like, container);
    return card;
}

const getImageURL = (iconCode) =>
    `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

export { createTabNow, createTabDetails, createTabForecast}