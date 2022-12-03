import { UI_ELEMENTS, showWeatherNow, showWeatherDetails } from "./ui.js";
import { addStorageCurrentCity, getStorageCurrentCity, addStorageFavoriteCities, getStorageFavoriteCities } from "./storage.js";
window.location.hash = "now";

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
let favoriteCityList = [];

UI_ELEMENTS.NOW_BTN_LIKE.addEventListener('click', () => {
  const cityName = UI_ELEMENTS.NOW_BTN_LIKE.previousElementSibling.textContent;
  addCityFavorite(cityName);
});

function addCityFavorite(cityName) {
  const isValid = favoriteCityList.includes(cityName);
  if (isValid) {
    favoriteCityList = favoriteCityList.filter((item) => {
      return item != cityName;
    });
    renderFavoriteCity();
  } else {
    favoriteCityList.push(cityName);
    addStorageFavoriteCities(favoriteCityList)
    renderFavoriteCity();
  }
}

function deleteFavoriteCity() {
  const cityName = this.parentNode.textContent
  this.parentNode.remove();
  favoriteCityList = favoriteCityList.filter(item => {
    return item != cityName;
  });
  addStorageFavoriteCities(favoriteCityList)
}

function renderFavoriteCity() {
  UI_ELEMENTS.FAVORITE_LIST.textContent = '';
  favoriteCityList = getStorageFavoriteCities();
  favoriteCityList.forEach(element => {
    const isValid = favoriteCityList.includes(element);
    const item = document.createElement('li');
    const button = document.createElement('button');
    item.classList.add('weather__favorites-item');
    button.classList.add('weather__favorites-delete');
    item.textContent = element;
    button.addEventListener('click', deleteFavoriteCity);
    if (isValid) {
      UI_ELEMENTS.NOW_BTN_LIKE.classList.add('now__sities-btn--like');
    }
    item.append(button);
    UI_ELEMENTS.FAVORITE_LIST.append(item);
    item.addEventListener('click', () => {
      getWeather(element);
      addStorageCurrentCity(element);
    })
  });
}

function checkCityFavorite(cityName) {
  const isValid = favoriteCityList.includes(cityName);
  if (!isValid) {
    UI_ELEMENTS.NOW_BTN_LIKE.classList.remove('now__sities-btn--like');
  } else {
    UI_ELEMENTS.NOW_BTN_LIKE.classList.add('now__sities-btn--like');
  }
}

UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityName = UI_ELEMENTS.INPUT_FORM.value;
  addStorageCurrentCity(cityName)
  getWeather(cityName);
  event.target.reset();
})

async function getWeather(cityName) {
  let city;
  if (!cityName) {
    city = getStorageCurrentCity() || 'Aktobe';
  } else {
    city = cityName
  }

  const url = `${SERVER_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const promise = await fetch(url);
    const data = await promise.json();
    checkCityFavorite(data.name);
    showWeatherNow(data);
    showWeatherDetails(data);
  } catch (error) {
    alert(error);
  }
}

export function convertTime(time) {
  const date = new Date(time * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const result = `${hours}:${minutes}`;
  return result;
}

getWeather();
getStorageFavoriteCities();
renderFavoriteCity();