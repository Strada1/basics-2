import { API_KEY, SERVER_URL } from "./constants.js";
import { render } from "./render.js";
import { storage } from "./storage.js";

async function createWeatherCity(inputValue) {
  let weather = await getResponse(inputValue, SERVER_URL.WEATHER);
  if (!weather) return render.showError("Город не найден");
  let weatherCity = outputWeather(weather);
  render.weatherNow = weatherCity;
  storage.setLastCity(weatherCity.city);

  render.renderInfoWindow();

  let weatherForecast = await getResponse(inputValue, SERVER_URL.FORECAST);
  if (!weatherForecast) return render.showError("Город не найден");
  render.cityName = weatherForecast.city.name;
  render.weatherForecast = weatherForecast.list;

  render.renderInfoWindow();
}

async function getResponse(city, url) {
  const urlWeather = `${url}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
  let response = await fetch(urlWeather);
  if (response.ok) {
    let json = await response.json();
    return json;
  }
}

function outputWeather(data) {
  let weatherNow = {};
  let sunriseCity = getDate(data.sys.sunrise);
  let sunsetCity = getDate(data.sys.sunset);
  let sunriseCityHours = getDiffTime(data.timezone, sunriseCity.hours);
  let sunsetCityHours = getDiffTime(data.timezone, sunsetCity.hours);

  weatherNow.sunrise = `${sunriseCityHours}:${sunriseCity.minutes}`;
  weatherNow.sunset = `${sunsetCityHours}:${sunsetCity.minutes}`;
  weatherNow.temperature = Math.round(data.main.temp);
  weatherNow.feels_like = Math.round(data.main.feels_like);
  weatherNow.weather = data.weather;
  weatherNow.city = data.name;
  return weatherNow;
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
function getDiffTime(timezone, hours) {
  let number = (24 + hours + timezone / 3600) % 24;
  return addZero(number);
}
const addZero = (number) => (number < 10 ? "0" + number : number);

export { createWeatherCity };
