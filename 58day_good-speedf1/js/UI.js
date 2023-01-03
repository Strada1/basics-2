import { convertTime } from "./main2.js";

export const UI_ELEMENTS = {
  TABS: document.querySelectorAll('.tabs-item'),
  LIKE: document.querySelector('.heart'),
  FAVORITE_LIST: document.querySelector('.heart'),
  DETAILS_TEMP: document.querySelector('.details__temp-value'),
  DETAILS_FEELS: document.querySelector('.details__feels-value'),
  DETAILS_WEATHER: document.querySelector('.details__weather-value'),
  DETAILS_SUNRISE: document.querySelector('.sunrise'),
  DETAILS_SUNSET: document.querySelector('.sunset'),
  DETAILS_CITY: document.querySelector('.details__title'),
}

UI_ELEMENTS.TABS.forEach((item) => {
  item.addEventListener('click', () => {
    UI_ELEMENTS.TABS.forEach((item) => {
      item.classList.remove('btn--active')
    })
    item.classList.add('btn--active')
  })
})

// UI_ELEMENTS.LIKE.addEventListener('click', () => {
//   UI_ELEMENTS.LIKE.classList.toggle('now__sities-btn--like')
// })




export function showWeatherDetails(data) {
  UI_ELEMENTS.DETAILS_CITY.textContent = data.name;
  UI_ELEMENTS.DETAILS_TEMP.textContent = data.main.temp.toFixed(0);
  UI_ELEMENTS.DETAILS_FEELS.textContent = data.main.feels_like.toFixed(0);
  UI_ELEMENTS.DETAILS_WEATHER.textContent = data.weather[0].main;
  UI_ELEMENTS.DETAILS_SUNRISE.textContent = convertTime(data.sys.sunrise);
  UI_ELEMENTS.DETAILS_SUNSET.textContent = convertTime(data.sys.sunset);
}