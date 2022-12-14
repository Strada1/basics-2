'use strict';

const ELECT = localStorage.getItem('cityList')
  ? JSON.parse(localStorage.getItem('cityList'))
  : [];

let date;
function readResponse(result) {
  date = result;
}

const buttonAddFavorite = document.querySelector('#shape');
buttonAddFavorite.addEventListener('click', saveCityInLocalStorage);
buttonAddFavorite.addEventListener('click', render);

const form = document.getElementById('form');
form.onsubmit = function (event) {
  event.preventDefault();
  const search = document.getElementById('search').value;
  fetchRequest(search);
};

function fetchRequest(value) {
  const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const cityName = value;
  const apiKey = 'f94d67d8d81a737ffe91435db9e132d6';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      showResult(date), readResponse(date);
    })
    .catch((error) => alert(`Возникла ошибка:${error}`));
}

function saveCityInLocalStorage() {
  if (!filter(ELECT, date.name)) {
    ELECT.push(date.name);
    localStorage.setItem('cityList', JSON.stringify(ELECT));
  }
}

function filter(arrayOfCities, itemToCompare) {
  for (const city of arrayOfCities) {
    if (city.toLowerCase() === itemToCompare.toLowerCase()) return true;
  }
  return false;
}

function render() {
  const electLocations = document.getElementById('elect-locations');
  electLocations.innerHTML = '';

  for (let city of ELECT) {
    const favoriteCity = document.createElement('li');
    const close = document.createElement('div');
    const electCity = document.createElement('div');

    favoriteCity.setAttribute('class', 'favoriteCity');
    close.setAttribute('class', 'close');
    close.setAttribute('id', 'close');
    electCity.setAttribute('class', 'elect-city');
    electCity.setAttribute('id', 'elect-city');

    electCity.textContent = city;

    electCity.addEventListener('click', (e) => {
      fetchRequest(e.target.textContent);
    });

    close.addEventListener('click', () => {
      deleteCityFromElect(city);
    });

    electLocations.prepend(favoriteCity);
    favoriteCity.prepend(electCity);
    favoriteCity.append(close);
  }
}

function deleteCityFromElect(cityForDelete) {
  const positionOfCity = ELECT.indexOf(cityForDelete);
  ELECT.splice(positionOfCity, 1);
  localStorage.setItem('cityList', JSON.stringify(ELECT));
  render();
}

function showResult(response) {
  if (!response.name) return alert('Введите название города');

  const cityName = document.getElementById('main-city');
  const temperature = document.getElementById('mainTemperature');
  const iconNow = document.getElementById('icon-now');
  const search = document.getElementById('search');
  search.value = '';
  localStorage.setItem('currentCity', response.name);

  const VARIABLE = {
    CITY: localStorage.getItem('currentCity'),
    TEMPERATURE: response.main.temp,
    FEELS_LIKE: response.main.feels_like,
    WEATHER: response.weather[0].main,
    SUNRISE: `${new Date(response.sys.sunrise * 1000).getHours()}:${new Date(
      response.sys.sunrise * 1000
    ).getMinutes()}`,
    SUNSET: `${new Date(response.sys.sunset * 1000).getHours()}:${new Date(
      response.sys.sunset * 1000
    ).getMinutes()}`,
    ICON: `http://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`,
  };

  //вкладка now
  temperature.textContent = Math.round(VARIABLE.TEMPERATURE - 273, 15) + ' °C';
  cityName.textContent = VARIABLE.CITY;
  iconNow.src = VARIABLE.ICON;

  //вкладка detail
  const cityNameDetail = document.getElementById('city-name-detail');
  const mainTemperature = document.getElementById('temperature');
  const feelsLike = document.getElementById('feels-like');
  const weather = document.getElementById('weather');
  const sunrise = document.getElementById('sunrise');
  const sunset = document.getElementById('sunset');

  cityNameDetail.textContent = VARIABLE.CITY;
  mainTemperature.textContent = `Температура: ${
    Math.round(VARIABLE.TEMPERATURE - 273, 15) + ' °C'
  }`;
  feelsLike.textContent = `Ощущается как: ${
    Math.round(VARIABLE.FEELS_LIKE - 273.5) + ' °C'
  }`;
  weather.textContent = `Погода: ${VARIABLE.WEATHER}`;
  sunrise.textContent = `Восход: ${VARIABLE.SUNRISE}`;
  sunset.textContent = `Закат: ${VARIABLE.SUNSET}`;
}

const currentCity = localStorage.getItem('currentCity');
if (currentCity !== 'undefined' && currentCity !== null && currentCity !== '') {
  fetchRequest(localStorage.getItem('currentCity'));
}

render();
