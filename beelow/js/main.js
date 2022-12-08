const UI_ELEMENTS = {
  MENU_NOW: document.querySelector(".left_menu__page_one"),
  MENU_DETAILS: document.querySelector(".left_menu__page_two"),
  MENU_FORECAST: document.querySelector(".left_menu__page_three"),
  BUTTON_NOW: document.querySelector(".container__now"),
  BUTTON_DETAILS: document.querySelector(".container__details"),
  BUTTON_FORECAST: document.querySelector(".container__forecast"),
  INPUT_FORM: document.querySelector(".input_form"),
  INPUT_TEXT: document.querySelector(".container__search_city__input"),
  LEFT_MENU_PAGE_NEW: document.querySelector(".left_menu__page_one"),
  NOW_INFO_TEMPERATURE: document.querySelector(".page_one__info__temperature"),
  NOW_IMG_WEATHER: document.querySelector(".page_one__info__sign"),
  NOW_CITY_NAME: document.querySelector(".page_one__info__city"),
  NOW_IMG_HEART: document.querySelector(".page_one__info__heart"),
  CITY_LIST: document.querySelector(".city_list"),
  DETAIL_CITY_NAME: document.querySelector(".page_two__info__city"),
  DETAIL_INFO_LIST: document.querySelector(".page_two__info__list"),
  DETAIL_LIST_TEMP: document.querySelector(".detail_list_temp"),
  DETAIL_LIST_FEELS: document.querySelector(".detail_list_feels"),
  DETAIL_LIST_WEATHER: document.querySelector(".detail_list_weather"),
  DETAIL_LIST_SUNRISE: document.querySelector(".detail_list_sunrise"),
  DETAIL_LIST_SUNSET: document.querySelector(".detail_list_sunset"),
  FORECAST_CITY_NAME: document.querySelector(".page_three__info__city"),
  FORECAST_CARD_LIST: document.querySelector(".forecast__card_list"),
};

const CREATE_ELEMENTS = {
  DIV: function () {
    return document.createElement("div");
  },
  A: function () {
    return document.createElement("a");
  },
  LI: function () {
    return document.createElement("li");
  },
  P: function () {
    return document.createElement("p");
  },
  BR: function () {
    return document.createElement("br");
  },
  IMG: function () {
    return document.createElement("img");
  },
};


const API = {
  URL_WEATHER: "https://api.openweathermap.org/data/2.5/weather",
  URL_IMG: "http://openweathermap.org/img/wn",
  URL_FORECAST: "https://api.openweathermap.org/data/2.5/forecast",
  KEY: "0515a87e363fac066d60e5e7cd8721be",
  IMG_SIZE_2X: "@2x.png",
};


let currentCity = "London";
let cityFavoriteList = [];

UI_ELEMENTS.BUTTON_NOW.addEventListener("click", swapOnNow);
UI_ELEMENTS.BUTTON_DETAILS.addEventListener("click", swapOnDetails);
UI_ELEMENTS.BUTTON_FORECAST.addEventListener("click", swapOnForecast);

UI_ELEMENTS.INPUT_FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(UI_ELEMENTS.INPUT_TEXT.value);
  UI_ELEMENTS.INPUT_FORM.reset();
});

UI_ELEMENTS.NOW_IMG_HEART.addEventListener("click", function () {
  addCityFavorite(currentCity);
});

document.addEventListener("DOMContentLoaded", getContnetLoaded);

function getContnetLoaded() {
  currentCity = storage.getCurrentCity();
  cityFavoriteList = storage.getCityFavoriteList();
  getWeatherData(currentCity);
  getForecastData(currentCity);
  renderAdedLocations();
}


const storage = {
  saveCityFavoriteList: function (cityFavoriteList) {
    localStorage.setItem("cityFavoriteList", JSON.stringify(cityFavoriteList));
  },
  saveCurrentCity: function (currentCity) {
    localStorage.setItem("currentCity", currentCity);
  },
  getCityFavoriteList: function () {
    return JSON.parse(localStorage.getItem("cityFavoriteList"));
  },
  getCurrentCity: function () {
    return localStorage.getItem("currentCity");
  },
};


function addCityFavorite(newCityFavorite) {
  let findName = cityFavoriteList.findIndex(function (findName) {
    return findName.name === newCityFavorite;
  });
  if (findName >= 0) {
    alert("Такой город уже есть");
    return;
  } else if (newCityFavorite === "") {
    alert("Введите название города");
  } else {
    cityFavoriteList.push({
      name: newCityFavorite,
    });
  }
  renderAdedLocations();
}

function cityFavoriteToLeftTab(name) {
  getWeatherData(name);
  getForecastData(name);
}

function deleteCity(idTask) {
  cityFavoriteList.splice(idTask, 1);
  console.log("Удален из избранного");
  renderAdedLocations();
}


function getWeatherData(cityName) {
  const url = `${API.URL_WEATHER}?q=${cityName}&appid=${API.KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      updateCurrentCity(data);
      parseWeatherElements(data);
    })
    .catch(alert);
}

function getForecastData(cityName) {
  const url = `${API.URL_FORECAST}?q=${cityName}&appid=${API.KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      parseForecastElements(data);
      console.log(data);
    })
    .catch(alert);
}

function parseWeatherElements({ name, main, weather, sys }) {
  const nameCity = name;
  const temperature = convertKelvinToCelsius(main.temp);
  const imgWeather = `${API.URL_IMG}/${weather[0].icon}${API.IMG_SIZE_2X}`;
  const feelsLike = convertKelvinToCelsius(main.feels_like);
  const readWeather = weather[0].main;
  const sunrise = convertUnixToTime(sys.sunrise);
  const sunset = convertUnixToTime(sys.sunset);

  renderNow(temperature, imgWeather, nameCity);
  renderDetail(nameCity, temperature, feelsLike, readWeather, sunrise, sunset);
}

function parseForecastElements({ city, list }) {
  UI_ELEMENTS.FORECAST_CARD_LIST.innerHTML = "";

  const nameCity = city.name;

  for (let element of list) {
    const date = convertUnixToDate(element.dt);
    const time = convertUnixToTime(element.dt);
    const temperature = convertKelvinToCelsius(element.main.temp);
    const feelsLike = convertKelvinToCelsius(element.main.feels_like);
    const textWeather = element.weather[0].main;
    const imgWeather = `${API.URL_IMG}/${element.weather[0].icon}.png`;

    renderForecast(
      nameCity,
      date,
      time,
      temperature,
      feelsLike,
      textWeather,
      imgWeather
    );
  }
}

function updateCurrentCity({ name }) {
  currentCity.length = 0;
  currentCity = name;
  storage.saveCurrentCity(name);
}

function getData(cityName) {
  getWeatherData(cityName);
  getForecastData(cityName);
}


function swapOnNow() {
  UI_ELEMENTS.MENU_NOW.hidden = false;
  UI_ELEMENTS.MENU_DETAILS.hidden = true;
  UI_ELEMENTS.MENU_FORECAST.hidden = true;

  UI_ELEMENTS.BUTTON_NOW.style.background = "#000";
  UI_ELEMENTS.BUTTON_NOW.style.color = "#fff";
  UI_ELEMENTS.BUTTON_NOW.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_NOW.style.cursor = "pointer";

  UI_ELEMENTS.BUTTON_DETAILS.style.background = "#cac7be";
  UI_ELEMENTS.BUTTON_DETAILS.style.color = "#000";
  UI_ELEMENTS.BUTTON_DETAILS.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_DETAILS.style.cursor = "pointer";

  UI_ELEMENTS.BUTTON_FORECAST.style.background = "#cac7be";
  UI_ELEMENTS.BUTTON_FORECAST.style.color = "#000";
  UI_ELEMENTS.BUTTON_FORECAST.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_FORECAST.style.cursor = "pointer";
}

function swapOnDetails() {
  UI_ELEMENTS.MENU_NOW.hidden = true;
  UI_ELEMENTS.MENU_DETAILS.hidden = false;
  UI_ELEMENTS.MENU_FORECAST.hidden = true;

  UI_ELEMENTS.BUTTON_NOW.style.background = "#cac7be";
  UI_ELEMENTS.BUTTON_NOW.style.color = "#000";
  UI_ELEMENTS.BUTTON_NOW.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_NOW.style.cursor = "pointer";

  UI_ELEMENTS.BUTTON_DETAILS.style.background = "#000";
  UI_ELEMENTS.BUTTON_DETAILS.style.color = "#fff";
  UI_ELEMENTS.BUTTON_DETAILS.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_DETAILS.style.cursor = "pointer";

  UI_ELEMENTS.BUTTON_FORECAST.style.background = "#cac7be";
  UI_ELEMENTS.BUTTON_FORECAST.style.color = "#000";
  UI_ELEMENTS.BUTTON_FORECAST.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_FORECAST.style.cursor = "pointer";
}

function swapOnForecast() {
  UI_ELEMENTS.MENU_NOW.hidden = true;
  UI_ELEMENTS.MENU_DETAILS.hidden = true;
  UI_ELEMENTS.MENU_FORECAST.hidden = false;

  UI_ELEMENTS.BUTTON_NOW.style.background = "#cac7be";
  UI_ELEMENTS.BUTTON_NOW.style.color = "#000";
  UI_ELEMENTS.BUTTON_NOW.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_NOW.style.cursor = "pointer";

  UI_ELEMENTS.BUTTON_DETAILS.style.background = "#cac7be";
  UI_ELEMENTS.BUTTON_DETAILS.style.color = "#000";
  UI_ELEMENTS.BUTTON_DETAILS.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_DETAILS.style.cursor = "pointer";

  UI_ELEMENTS.BUTTON_FORECAST.style.background = "#000";
  UI_ELEMENTS.BUTTON_FORECAST.style.color = "#fff";
  UI_ELEMENTS.BUTTON_FORECAST.style.border = "1px solid #000000";
  UI_ELEMENTS.BUTTON_FORECAST.style.cursor = "pointer";
}

function renderNow(temperature, imgWeather, nameCity) {
  UI_ELEMENTS.NOW_INFO_TEMPERATURE.textContent = temperature;
  UI_ELEMENTS.NOW_IMG_WEATHER.src = imgWeather;
  UI_ELEMENTS.NOW_CITY_NAME.textContent = nameCity;
}

function renderDetail(
  nameCity,
  temperature,
  feelsLike,
  weather,
  sunrise,
  sunset
) {
  UI_ELEMENTS.DETAIL_CITY_NAME.textContent = nameCity;
  UI_ELEMENTS.DETAIL_LIST_TEMP.textContent = `Temperature: ${temperature}`;
  UI_ELEMENTS.DETAIL_LIST_FEELS.textContent = `Feels like: ${feelsLike}`;
  UI_ELEMENTS.DETAIL_LIST_WEATHER.textContent = `Weather: ${weather}`;
  UI_ELEMENTS.DETAIL_LIST_SUNRISE.textContent = `Sunrise: ${sunrise}`;
  UI_ELEMENTS.DETAIL_LIST_SUNSET.textContent = `Sunset: ${sunset}`;
}

function renderForecast(
  nameCity,
  date,
  time,
  temperature,
  feelsLike,
  textWeather,
  imgWeather
) {
  const divContainer = CREATE_ELEMENTS.DIV();
  const infoDate = CREATE_ELEMENTS.P();
  const infoTemperature = CREATE_ELEMENTS.P();
  const infoTime = CREATE_ELEMENTS.P();
  const infoTextWeather = CREATE_ELEMENTS.P();
  const infoImgWeather = CREATE_ELEMENTS.IMG();
  const breakText = CREATE_ELEMENTS.BR();

  divContainer.className = "page_three__info__card";
  infoDate.className = "page_three__info__date";
  infoTemperature.className = "page_three__info__temperature";
  infoTime.className = "page_three__time";
  infoTextWeather.className = "page_three__weather";
  infoImgWeather.className = "page_three__card__sign";

  UI_ELEMENTS.FORECAST_CITY_NAME.textContent = nameCity;
  infoDate.textContent = date;
  infoTemperature.textContent = `Temperature: ${temperature} Feels like: ${feelsLike}`;
  infoTime.textContent = time;
  infoTextWeather.textContent = textWeather;
  infoImgWeather.src = imgWeather;

  UI_ELEMENTS.FORECAST_CARD_LIST.append(divContainer);
  divContainer.append(infoDate);
  divContainer.append(infoTemperature);
  divContainer.append(infoTime);
  divContainer.append(infoTextWeather);
  divContainer.append(infoImgWeather);
  UI_ELEMENTS.FORECAST_CARD_LIST.append(breakText);
}

function updateAdedLocations(city, index, cityRender) {
  const divCity = CREATE_ELEMENTS.DIV();
  const nameCity = CREATE_ELEMENTS.A();
  const deleteButton = CREATE_ELEMENTS.A();

  divCity.id = index;
  nameCity.className = "view_city";
  nameCity.textContent = city.name;
  deleteButton.className = "delete_city";
  deleteButton.textContent = " ✕";

  cityRender.append(divCity);
  divCity.append(nameCity);
  divCity.append(deleteButton);

  deleteButton.addEventListener("click", function () {
    deleteCity(divCity.id);
  });

  nameCity.addEventListener("click", function () {
    cityFavoriteToLeftTab(city.name);
  });
}

function renderAdedLocations() {
  UI_ELEMENTS.CITY_LIST.innerHTML = "";

  cityFavoriteList.forEach(function (city, index) {
    currentCity = UI_ELEMENTS.CITY_LIST;
    updateAdedLocations(city, index, currentCity);
  });

  storage.saveCityFavoriteList(cityFavoriteList);
}


function convertKelvinToCelsius(temperature) {
  return `${Math.round(temperature - 273.15)}°`;
}

function convertUnixToTime(time) {
  const parseTime = new Date(time * 1000);
  const hours = correctionTime(parseTime.getHours());
  const minutes = correctionTime(parseTime.getMinutes());
  const outputTime = `${hours}:${minutes}`;
  return outputTime;
}

function convertUnixToDate(date) {
  const parseDate = new Date(date * 1000);
  const day = parseDate.getDate();
  const month = parseDate.toLocaleString("en", { month: "long" });
  const outputDate = `${day} ${month}`;
  return outputDate;
}

function correctionTime(date) {
  return date.toString().padStart(2, "0");
}

