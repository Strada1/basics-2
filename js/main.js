import { UI_ELEMENTS, showWeatherNow, showWeatherDetails } from "./ui.js";
window.location.hash = "now";

// const favoriteList = [];

// function addCityFavorite() {
//   // функция добавления города в избранное
//   console.log('test');
// }

// UI_ELEMENTS.NOW_BTN_LIKE.addEventListener('click', addCityFavorite);

function showError(error) {
  alert(error)
}
UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityName = UI_ELEMENTS.INPUT_FORM.value;
  getWeather(cityName);
  event.target.reset();
})

async function getWeather(cityName) {
  const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
  try {
    const promise = await fetch(url);
    const data = await promise.json();
    showWeatherNow(data);
    showWeatherDetails(data);
  } catch (error) {
    alert(error)
  }
}

const formatTime = (seconds) => format(new Date(seconds * 1000), 'kk mm');
const formatDate = (date) => format(new Date(date), 'd MMM');

console.log(formatTime(1669700017))