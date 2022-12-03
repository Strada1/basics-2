import { convertTime } from "./main.js";

export const UI_ELEMENTS = {
  FAVORITE_LIST: document.querySelector('.weather__favorites-list'),
  FORM: document.querySelector('.weather__search-form'),
  INPUT_FORM: document.querySelector('.weather__search-input'),
  TABS: document.querySelectorAll('.tabs-item'),
  NOW_TEMPERATURE: document.querySelector('.now__temperature'),
  NOW_CITY: document.querySelector('.now__sities'),
  NOW_ICON: document.querySelector('.now__icon'),
  NOW_BTN_LIKE: document.querySelector('.now__sities-btn'),
  DETAILS_TEMP: document.querySelector('.details__temp-value'),
  DETAILS_FEELS: document.querySelector('.details__feels-value'),
  DETAILS_WEATHER: document.querySelector('.details__weather-value'),
  DETAILS_SUNRISE: document.querySelector('.details__sunrise-value'),
  DETAILS_SUNSET: document.querySelector('.details__sunset-value'),
  DETAILS_CITY: document.querySelector('.details__title'),
}

UI_ELEMENTS.TABS.forEach((item) => {
  item.addEventListener('click', () => {
    UI_ELEMENTS.TABS.forEach((item) => {
      item.classList.remove('tabs-item--active')
    })
    item.classList.add('tabs-item--active')
  })
})

export function showWeatherNow(data) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  UI_ELEMENTS.NOW_TEMPERATURE.textContent = data.main.temp.toFixed(1);
  UI_ELEMENTS.NOW_CITY.textContent = data.name;
  UI_ELEMENTS.NOW_ICON.setAttribute('src', iconUrl)
}

export function showWeatherDetails(data) {
  UI_ELEMENTS.DETAILS_CITY.textContent = data.name;
  UI_ELEMENTS.DETAILS_TEMP.textContent = data.main.temp.toFixed(0);
  UI_ELEMENTS.DETAILS_FEELS.textContent = data.main.feels_like.toFixed(0);
  UI_ELEMENTS.DETAILS_WEATHER.textContent = data.weather[0].main;
  UI_ELEMENTS.DETAILS_SUNRISE.textContent = convertTime(data.sys.sunrise);
  UI_ELEMENTS.DETAILS_SUNSET.textContent = convertTime(data.sys.sunset);
}