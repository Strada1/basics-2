import { WEATHER_CLASS } from "./constants.js";
import { render } from "./render.js";
import { createWeatherCity } from "./weather.js";
import { storage } from "./storage.js";

async function formHandler(event) {
  event.preventDefault();
  let input = event.target.querySelector(`.${WEATHER_CLASS.SEARCH_INPUT}`);
  let inputValue = input.value;
  if (inputValue === "") return;
  createWeatherCity(inputValue);
  input.value = "";
}

function cityHandler(event) {
  const target = event.target;
  if (target.className === WEATHER_CLASS.ADD_CITY) {
    let city = target.previousElementSibling.textContent;
    storage.addOrRemoveCity(city);
    render.renderAllInfo();
  }
}

function favouritesHandler(event) {
  let target = event.target;
  if (target.className === WEATHER_CLASS.FAVOURITES_CITY)
    createWeatherCity(target.textContent);

  if (target.className === WEATHER_CLASS.FAVOURITES_REMOVE) {
    let city = target.closest(`.${WEATHER_CLASS.FAVOURITES_CITY}`).textContent;
    storage.addOrRemoveCity(city);
    render.renderInfoWindow();
    render.renderListCity();
  }
}

function buttonHandler(event) {
  const button = event.target;
  render.changeActiveTab(button);
}

export { formHandler, buttonHandler, cityHandler, favouritesHandler };
