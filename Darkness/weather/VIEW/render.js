import { locationHandle } from "../CONTROLLER/handlers.js";
import { giveTabs } from "./tabs.js";
import { nowCard } from "./cards/nowcard.js";
import { detailsCard } from "./cards/detailscard.js";
import { forecastCard } from "./cards/forecastcard.js";
import { cities } from "../MODEL/locations.js";
import { RU } from "../MODEL/languages/ru.js";
import { EN } from "../MODEL/languages/en.js";
import { languageHelper } from "../CONTROLLER/helpers.js";
export const render = async (array) => {
  const [cityWeather, forecast] = await array;
  const leftSide = document.querySelector(".main_info-section_left-side_card");
  languageHelper(cities.lang);
  leftSide.replaceChildren();
  leftSide.append(nowCard(cityWeather));
  leftSide.append(detailsCard(cityWeather, cities.lang === "ru" ? RU : EN));
  leftSide.append(
    forecastCard(cityWeather, forecast, cities.lang === "ru" ? RU : EN)
  );
  giveTabs();
  cities.currentCity = cityWeather.name;
};

export const cityRender = (array) => {
  const cityLocations = document.querySelector(
    ".main_info-section_locations-cities"
  );
  cityLocations.replaceChildren();
  for (let city of array) {
    const location = document.createElement("p");
    location.textContent = city;
    location.setAttribute("data-cityname", city);
    cityLocations.append(location);
  }
  cityLocations.addEventListener("click", locationHandle);
};
