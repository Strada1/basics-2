import { nowBlockEl, detailsBlockEl } from "./variables.js";
import storage from "./local.js";
import { getCelsius, getHumanHours } from "./countDateTime.js";

export function renderData(value) {
    nowBlockEl.degrees.textContent = getCelsius(value.main.temp) + '℃';
    nowBlockEl.city.textContent = value.name;
    storage.saveNewCity(nowBlockEl.city.textContent);
    nowBlockEl.icon.src = `http://openweathermap.org/img/wn/${value.weather[0].icon}@4x.png`;
};

export function renderDetails(value) {
    detailsBlockEl.city.textContent = value.name;
    detailsBlockEl.temp.textContent = getCelsius(value.main.temp) + '℃';
    detailsBlockEl.feel.textContent = getCelsius(value.main.feels_like) + '℃';
    detailsBlockEl.weather.textContent = value.weather[0].main;
    detailsBlockEl.sunrise.textContent = getHumanHours(new Date(value.sys.sunrise * 1000));
    detailsBlockEl.sunset.textContent = getHumanHours(new Date(value.sys.sunset * 1000));
};