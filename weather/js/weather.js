import { ELEMENT, CLASS } from './ui.js';
import { parseWeather, parseForecast } from './conversion.js';
import { API, ERROR } from './data.js';
import { render } from './render.js';
import {
  changeFavoritesList,
  favoritesList,
  currentCity,
} from './favorites.js';

ELEMENT.FORM.addEventListener('submit', handleSendingData);
ELEMENT.LIKE.addEventListener('click', changeFavoritesList);
document.addEventListener('DOMContentLoaded', () => {
  getWeatherData(currentCity);
  getForecastData(currentCity);
  favoritesList === ERROR.EMPTY_VALUE || render();
});
for (let btn of ELEMENT.BUTTONS) {
  btn.addEventListener('click', changeActiveBtn);
}

function handleSendingData(event) {
  event.preventDefault();
  const cityName = event.target.city.value;
  cityName === ERROR.EMPTY_VALUE ||
    getWeatherData(cityName) + getForecastData(cityName);
  this.reset();
}

function getWeatherData(cityName) {
  const url = `${API.URL_WEATHER}?q=${cityName}&appid=${API.KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.name === undefined) {
        throw new Error(ERROR.INCORRECT_CITY);
      }
      parseWeather(data);
      render();
    })
    .catch((error) => {
      switch (error.message) {
        case ERROR.FAILED_FETCH:
          console.log(ERROR.NOT_RESPONDING);
          break;
        default:
          console.log(`${error}`);
      }
    });
}

function getForecastData(cityName) {
  const url = `${API.URL_FORECAST}/?q=${cityName}&appid=${API.KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      parseForecast(data);
    })
    .catch((error) => console.log(`${error}`));
}

function changeActiveBtn(event) {
  const btnClicked = event.target;
  ELEMENT.BUTTONS.forEach((btn) => {
    if (btnClicked !== btn && btn.classList.contains(CLASS.ACTIVE_BTN)) {
      btn.classList.remove(CLASS.ACTIVE_BTN);
    }
  });
  btnClicked.classList.contains(CLASS.ACTIVE_BTN) ||
    btnClicked.classList.add(CLASS.ACTIVE_BTN) + changeTabView(btnClicked);
}

const changeTabView = (btnClicked) => {
  const tabBtn = btnClicked.dataset.tab;
  ELEMENT.TABS_WEATHER.forEach((element) => {
    const tab = element.dataset.tab;
    switch (tab) {
      case tabBtn:
        element.classList.contains(CLASS.ACTIVE_TAB) ||
          element.classList.add(CLASS.ACTIVE_TAB) +
            element.classList.remove(CLASS.INACTIVE_TAB);
        break;
      default:
        element.classList.contains(CLASS.INACTIVE_TAB) ||
          element.classList.add(CLASS.INACTIVE_TAB) +
            element.classList.remove(CLASS.ACTIVE_TAB);
        break;
    }
  });
};

export { favoritesList, getWeatherData, getForecastData };
