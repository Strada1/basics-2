import { UI_ELEMENTS, showWeatherNow, showWeatherDetails } from "./ui.js";

window.location.hash = "now";

let favoriteCityList = [];

UI_ELEMENTS.NOW_BTN_LIKE.addEventListener('click', () => {
  const cityName = UI_ELEMENTS.NOW_BTN_LIKE.previousElementSibling.textContent;
  addCityFavorite(cityName);
});

export function addCityFavorite(cityName) {
  UI_ELEMENTS.NOW_BTN_LIKE.classList.toggle('now__sities-btn--like');
  const isValid = favoriteCityList.includes(cityName);
  if (isValid) {
    favoriteCityList = favoriteCityList.filter((item) => {
      return item != cityName;
    })
  } else {
    favoriteCityList.push(cityName)

  }
  console.log(favoriteCityList);
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
    checkCityFavorite(data.name);
    showWeatherNow(data);
    showWeatherDetails(data);
  } catch (error) {
    alert(error);
  }
}

export function convertTime(time) {
  const hours = new Date(time * 1000).getHours();
  const minutes = new Date(time * 1000).getMinutes();
  const result = `${hours}:${minutes}`;
  return result;
}