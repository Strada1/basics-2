import { ELEMENT, CLASS } from './ui.js';
import { API, ERROR } from './data.js';
import { render } from './render.js';
import { parseWeather, parseForecast } from './conversion.js';
import { changeFavoritesList, currentCity } from './favorites.js';

ELEMENT.FORM.addEventListener('submit', handleSendingData);
ELEMENT.LIKE.addEventListener('click', changeFavoritesList);
document.addEventListener('DOMContentLoaded', handleContentLoaded);
for (let button of ELEMENT.BUTTONS) {
  button.addEventListener('click', changeActiveButton);
}

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
  ELEMENT.BUTTONS.forEach((button) => {
    if (
      buttonClicked !== button &&
      button.classList.contains(CLASS.ACTIVE_BUTTON)
    ) {
      button.classList.remove(CLASS.ACTIVE_BUTTON);
    }
  });
  buttonClicked.classList.contains(CLASS.ACTIVE_BUTTON) ||
    buttonClicked.classList.add(CLASS.ACTIVE_BUTTON) +
      changeTabView(buttonClicked);
}

const changeTabView = (buttonClicked) => {
  const tabButton = buttonClicked.dataset.tab;
  ELEMENT.TABS_WEATHER.forEach((element) => {
    const tab = element.dataset.tab;
    switch (tab) {
      case tabButton:
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

export { repeatRequest };
