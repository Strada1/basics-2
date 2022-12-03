import { storage, createCity } from "./cities.js";
import {
  UI_ELEMENT,
  HEART,
  SERVER_URL,
  API_KEY,
  WEATHER_CLASS,
  ERROR,
} from "./constants.js";

import {
  createTabNow,
  createTabDetails,
  createTabForecast,
} from "./createTabs.js";

let weatherCity = {};
let weatherCityWithArr = {};

UI_ELEMENT.FORM.addEventListener("submit", formHandler);
UI_ELEMENT.BUTTONS.addEventListener("mousedown", buttonHandler);
UI_ELEMENT.INFO_WINDOW.addEventListener("click", сityHandler);
UI_ELEMENT.FAVOURITES.addEventListener("click", favouritesHandler);

function formHandler(event) {
  event.preventDefault();
  let input = event.target.querySelector(`.${WEATHER_CLASS.SEARCH_INPUT}`);
  if (input.value === "") return;
  createWeather(input.value);
  input.value = "";
}

function buttonHandler(event) {
  const button = event.target;
  changeActiveTab(button);
  fillInfoWindow();
}

function сityHandler(event) {
  const target = event.target;
  if (target.className === WEATHER_CLASS.ADD_CITY) {
    let city = target.previousElementSibling.textContent;
    storage.addOrRemoveCity(city);
    target.src = storage.checkCity(city) ? HEART.FILL : HEART.EMPTY;
    renderListCity();
  }
}

function favouritesHandler(event) {
  let target = event.target;
  if (target.className === WEATHER_CLASS.FAVOURITES_CITY)
    createWeather(target.textContent);

  if (target.className === WEATHER_CLASS.FAVOURITES_REMOVE) {
    let city = target.closest(`.${WEATHER_CLASS.FAVOURITES_CITY}`).textContent;
    storage.addOrRemoveCity(city);
    createWeather(city);
    renderListCity();
  }
}

function renderListCity() {
  UI_ELEMENT.FAVOURITES.replaceChildren();
  let cities = storage.getCities();
  cities.forEach((item) => UI_ELEMENT.FAVOURITES.prepend(createCity(item)));
}

function createWeather(city) {
  getFetch(city, SERVER_URL.WEATHER)
    .then((response) => response.json())
    .then(
      (result) => {
        if (result.cod >= 300) {
          throw new Error(ERROR.UNKNOWN_CITY);
        }
        UI_ELEMENT.INPUT_FORM.placeholder = result.name;
        storage.setLastCity(result.name);
        outputWeather(result);
        fillInfoWindow();
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .then(() => getFetch(city, SERVER_URL.FORECAST))
    .then((response) => response.json())
    .then(
      (result) => {
        if (result.cod >= 300) {
          throw new Error(ERROR.FORECAST_FAILURE);
        }
        outputWeatherArray(result);
        fillInfoWindow();
      },
      (error) => {
        throw error;
      }
    )
    .catch((error) => {
      showError(error);
    });
}

function getFetch(city, url) {
  const urlWeather = `${url}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
  return fetch(urlWeather);
}

function changeActiveTab(button) {
  if (button.classList.contains("-active")) return;

  const activeButton = button.closest(".tablinks").querySelector(".-active");
  activeButton.classList.remove("-active");
  button.classList.add("-active");
}

function getDiffTime(timezone, hours) {
  let number = (24 + hours + timezone / 3600) % 24;
  return addZero(number);
}
const addZero = (number) => (number < 10 ? "0" + number : number);

function outputWeather(data) {
  let sunriseCity = getDate(data.sys.sunrise);
  let sunsetCity = getDate(data.sys.sunset);
  let sunriseCityHours = getDiffTime(data.timezone, sunriseCity.hours);
  let sunsetCityHours = getDiffTime(data.timezone, sunsetCity.hours);

  weatherCity.sunrise = `${sunriseCityHours}:${sunriseCity.minutes}`;
  weatherCity.sunset = `${sunsetCityHours}:${sunsetCity.minutes}`;
  weatherCity.temperature = Math.round(data.main.temp);
  weatherCity.feels_like = Math.round(data.main.feels_like);
  weatherCity.weather = data.weather;
  weatherCity.city = data.name;
}

function outputWeatherArray(data) {
  weatherCityWithArr.name = data.city.name;
  weatherCityWithArr.list = data.list.slice(0, 10);
}

function getDate(seconds) {
  let date = new Date(seconds * 1000);
  let timezoneOffset = date.getTimezoneOffset() / 60;
  let dateTime = {
    hours: date.getHours() + timezoneOffset,
    minutes: addZero(date.getMinutes()),
  };
  return dateTime;
}

function fillInfoWindow() {
  if (!Object.values(weatherCity).length) return;

  UI_ELEMENT.INFO_WINDOW.replaceChildren();
  let tab;
  let activeTab = UI_ELEMENT.BUTTONS.querySelector(".-active").dataset.tab;
  
  if (activeTab === "Now") tab = createTabNow(weatherCity);
  if (activeTab === "Details") tab = tab = createTabDetails(weatherCity);
  if (activeTab === "Forecast") tab = createTabForecast(weatherCityWithArr);

  UI_ELEMENT.INFO_WINDOW.append(tab);
}

function showError(message) {
  let messageContainer = document.body.querySelector(".main__error");
  let textError = document.createElement("div");
  textError.className = "main__text-error";
  textError.textContent = message;
  messageContainer.append(textError);
  document.body.querySelector(".main").append(messageContainer);
  setTimeout(() => (messageContainer.textContent = ""), 2000);
}

(function () {
  let lastValue = storage.getLastCity();
  renderListCity();
  if (lastValue) {
    createWeather(lastValue);
    UI_ELEMENT.placeholder = lastValue;
  }
})();
