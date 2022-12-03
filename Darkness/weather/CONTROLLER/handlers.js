import { getCityInfo } from "../MODEL/getcity.js";
import { render, cityRender } from "../VIEW/render.js";
import { addLocation, cities, removeLocation } from "../MODEL/locations.js";
import { languageHelper } from "./helpers.js";
export const search = (event) => {
  event.preventDefault();
  const cityName = event.target.searchInput.value.trim();
  render(getCityInfo(cityName, cities.lang));
};

export const addCity = (event) => {
  const cityName = document.querySelector(
    ".main_info-section_left-side_card-first_title-city"
  );
  const city = cityName.dataset.name;
  const likeButton = event.target;
  likeButton.classList.toggle("like");
  likeButton.classList.toggle(
    "main_info-section_left-side_card-first_title-like"
  );
  if (likeButton.classList.contains("like")) {
    addLocation(city);
  } else {
    removeLocation(city);
  }
  cityRender(cities.favoriteCities);
};

export const locationHandle = (event) => {
  const cityName = event.target.dataset.cityname;
  if (cityName) {
    render(getCityInfo(cityName, cities.lang));
  } else if (event.target.tagName === "SPAN") {
    removeLocation(event.target.closest("p").dataset.cityname);
    cityRender(locations);
  }
};
export const langHandler = (event) => {
  const lang = event.target.dataset.lang;

  if (lang && lang !== cities.lang) {
    cities.lang = lang;
    languageHelper(lang);
    render(getCityInfo(cities.currentCity, cities.lang));
  }
};
