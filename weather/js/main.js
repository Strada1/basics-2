import { ELEMENT, CLASS } from './ui.js';
import { API, ERROR } from './data.js';
import { render } from './render.js';
import { parseWeather, parseForecast } from './conversion.js';
import { changeFavoritesList, currentCity } from './favorites.js';

document.addEventListener('DOMContentLoaded', handleContentLoaded);
ELEMENT.BUTTONS_WRAPPER.addEventListener('click', changeActiveButton);
ELEMENT.LIKE.addEventListener('click', changeFavoritesList);
ELEMENT.FORM.addEventListener('submit', handleSendingData);

function handleContentLoaded() {
  repeatRequest(currentCity);
  render();
}

function handleSendingData(event) {
  event.preventDefault();
  const cityName = event.target.city.value;
  cityName === ERROR.EMPTY_VALUE || repeatRequest(cityName);
  this.reset();
}

const repeatRequest = (cityName) => {
  getWeatherData(cityName);
  getForecastData(cityName);
};

function getWeatherData(cityName) {
  const url = `${API.URL_WEATHER}?q=${cityName}&appid=${API.KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.name === undefined) {
        throw new Error(ERROR.INCORRECT_CITY);
      }
      parseWeather(data);
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

function changeActiveButton(event) {
  const buttonClicked = event.target;
  const active = CLASS.ACTIVE_BUTTON;
  ELEMENT.BUTTONS.forEach((button) => {
    (buttonClicked === button && !button.classList.contains(active)) ||
      button.classList.remove(active);
  });
  buttonClicked.classList.contains(active) ||
    buttonClicked.classList.add(active) + 
    changeTabView(buttonClicked);
}

const changeTabView = (buttonClicked) => {
  const tabButton = buttonClicked.dataset.tab;
  const active = CLASS.ACTIVE_TAB;
  ELEMENT.TABS_WEATHER.forEach((element) => {
    const tab = element.dataset.tab;
    switch (tab) {
      case tabButton:
        element.classList.contains(active) || element.classList.add(active);
        break;
      default:
        !element.classList.contains(active) || element.classList.remove(active);
        break;
    }
  });
};

export { repeatRequest };
