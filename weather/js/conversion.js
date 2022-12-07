import { EXTRA_VARIABLE, ERROR, MONTH, WEATHER_STATE } from './data.js';
import { storage } from './favorites.js';
import {
  updateCityName,
  updateTemperature,
  updateWeatherState,
  updateTimeDetails,
  createItemsForecast,
} from './render.js';

const parseWeather = ({ name, main, weather, sys }) => {
  updateCityName(name);
  storage.saveCurrentCity(name);
  updateWeatherState(weather[0].main);

  const temperature = convertKelvinToCelsius(main.temp);
  const feelsLike = convertKelvinToCelsius(main.feels_like);
  updateTemperature(temperature, feelsLike);

  const sunrise = convertUnixToTime(sys.sunrise);
  const sunset = convertUnixToTime(sys.sunset);
  updateTimeDetails(sunrise, sunset);
};

const parseForecast = ({ list }) => {
  for (let element of list) {
    const forecastData = {
      date: convertUnixToDate(element.dt),
      time: convertUnixToTime(element.dt),
      temperature: convertKelvinToCelsius(element.main.temp),
      feels_like: convertKelvinToCelsius(element.main.feels_like),
      state: element.weather[0].main,
      image: findImageForState(element.weather[0].main),
    };
    createItemsForecast(forecastData);
  }
};

const findImageForState = (state) => {
  const coincidence = WEATHER_STATE.find((object) => {
    return object.state.includes(state);
  });
  return coincidence.src;
};

const convertKelvinToCelsius = (temperature) => {
  try {
    if (isNaN(temperature)) throw new Error(ERROR.NaN);
    return (temperature + EXTRA_VARIABLE.ABSOLUTE_ZERO).toFixed(0);
  } catch (error) {
    console.log(error.message);
  }
};

const padTo2Digits = (number) => number.toString().padStart(2, '0');

const convertUnixToTime = (dateUnix) => {
  try {
    if (isNaN(dateUnix)) throw new Error(ERROR.NaN);
    const date = new Date(dateUnix * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    return time;
  } catch (error) {
    console.log(error.message);
  }
};

const convertUnixToDate = (dateUnix) => {
  try {
    if (isNaN(dateUnix)) throw new Error(ERROR.NaN);
    const currentDate = new Date(dateUnix * 1000);
    const day = padTo2Digits(currentDate.getDate());
    const month = MONTH[currentDate.getMonth()];
    const date = `${day} ${month}`;
    return date;
  } catch (error) {
    console.log(error.message);
  }
};

export { parseWeather, parseForecast, findImageForState };
