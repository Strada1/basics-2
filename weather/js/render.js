import { ELEMENT, CREATE_ELEMENT, CLASS } from './ui.js';
import { EXTRA_VARIABLE, SRC_IMG } from './data.js';
import { findImageForState } from './conversion.js';
import { favoritesList } from './favorites.js';
import { repeatRequest } from './main.js';

const render = () => {
  ELEMENT.FAVORITES_LIST.replaceChildren();
  favoritesList.forEach((cityName) => createFavoriteCity(cityName));
};

const clearForecastList = () => ELEMENT.TAB_LIST_FORECAST.replaceChildren();

const updateCityName = (cityName) => {
  ELEMENT.ACTIVE_CITY_LIST.forEach((element) => {
    element.textContent = cityName;
    updateLike(cityName);
  });
  clearForecastList();
};

const updateLike = (cityName) => {
  favoritesList.includes(cityName)
    ? (ELEMENT.LIKE.src = SRC_IMG.BLACK_HEART)
    : (ELEMENT.LIKE.src = SRC_IMG.HEART);
};

const updateTemperature = (temperature, feelsLike) => {
  ELEMENT.TEMPERATURE.forEach((element) => {
    element.textContent = `${temperature}${EXTRA_VARIABLE.DEGREE_SYMBOL}`;
  });
  ELEMENT.FEELS_LIKE.textContent = `${feelsLike}${EXTRA_VARIABLE.DEGREE_SYMBOL}`;
};

const updateWeatherState = (state) => {
  ELEMENT.CURRENT_STATE.textContent === state ||
    (ELEMENT.CURRENT_STATE.textContent = state);
  ELEMENT.ICON.src === findImageForState(state) ||
    (ELEMENT.ICON.src = findImageForState(state));
};

const updateTimeDetails = (sunriseTime, sunsetTime) => {
  ELEMENT.SUNRISE.textContent = sunriseTime;
  ELEMENT.SUNSET.textContent = sunsetTime;
};

const createFavoriteCity = (cityName) => {
  const cityWrapper = CREATE_ELEMENT.LI();
  cityWrapper.textContent = cityName;
  cityWrapper.className = CLASS.CITY;
  ELEMENT.FAVORITES_LIST.prepend(cityWrapper);
  cityWrapper.addEventListener('click', () => repeatRequest(cityName));
};

const createItemsForecast = ({
  date,
  time,
  temperature,
  feels_like,
  state,
  image,
}) => {
  const divBlock = CREATE_ELEMENT.DIV();
  const spanDate = CREATE_ELEMENT.SPAN();
  const spanTime = CREATE_ELEMENT.SPAN();
  const spanTemperature = CREATE_ELEMENT.SPAN();
  const spanState = CREATE_ELEMENT.SPAN();
  const spanFeelsLike = CREATE_ELEMENT.SPAN();
  const imgIcon = CREATE_ELEMENT.IMG();

  divBlock.className = CLASS.FORECAST_BLOCK;
  spanDate.className = CLASS.FORECAST_DATE;
  spanTime.className = CLASS.FORECAST_TIME;
  spanState.className = CLASS.FORECAST_STATE;
  spanTemperature.className = CLASS.FORECAST_TEMPERATURE;
  spanFeelsLike.className = CLASS.FORECAST_FEELS_LIKE;
  imgIcon.className = CLASS.ICON_ITEM;
  imgIcon.alt = CLASS.ICON_ITEM;

  imgIcon.src = image;

  spanDate.textContent = date;
  spanTime.textContent = time;
  spanState.textContent = state;
  spanTemperature.textContent = `Temperature: ${temperature}${EXTRA_VARIABLE.DEGREE_SYMBOL}`;
  spanFeelsLike.textContent = `Feels like: ${feels_like}${EXTRA_VARIABLE.DEGREE_SYMBOL}`;

  ELEMENT.TAB_LIST_FORECAST.append(divBlock);
  divBlock.append(spanDate);
  divBlock.append(spanTime);
  divBlock.append(spanTemperature);
  divBlock.append(spanState);
  divBlock.append(spanFeelsLike);
  divBlock.append(imgIcon);
};

export {
  updateTemperature,
  updateWeatherState,
  updateCityName,
  updateTimeDetails,
  updateLike,
  createItemsForecast,
  render,
};
