const API_KEY = "3bfb7384f048b8e78896a10d694dd618";

const ERROR = {
  UNKNOWN_CITY: "Город не найден",
  FORECAST_FAILURE: "Не удалось получить Forecast",
};

const HEART = {
  EMPTY: "src/img/heart_o.svg",
  FILL: "src/img/heart.svg",
};

const SERVER_URL = {
  WEATHER: "https://api.openweathermap.org/data/2.5/weather",
  FORECAST: "https://api.openweathermap.org/data/2.5/forecast",
};

const UI_ELEMENT = {
  FORM: document.body.querySelector(".search-form"),
  INPUT_FORM: document.body.querySelector(".search-form__input"),
  BUTTONS: document.body.querySelector(".tablinks"),
  INFO_WINDOW: document.body.querySelector(".info-window"),
  FAVOURITES: document.body.querySelector(".favourites__cities"),
};

const WEATHER_CLASS = {
  SEARCH_INPUT: "search-form__input",
  ADD_CITY: "now__add-city",
  FAVOURITES_CITY: "favourites__city",
  FAVOURITES_REMOVE: "favourites__remove",
  NOW: "now info-window__item",
  DETAILS: "details info-window__item",
  FORECAST: "forecast info-window__item",
};

export { UI_ELEMENT, HEART, SERVER_URL, API_KEY, WEATHER_CLASS, ERROR };
