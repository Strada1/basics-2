import { getCityInfo } from "../MODEL/getcity.js";
import { render, cityRender } from "../VIEW/render.js";
import { addLocation, locations, removeLocation } from "../MODEL/locations.js";

export const search = (event) => {
  event.preventDefault();
  const cityName = event.target.searchInput.value.trim();
  render(getCityInfo(cityName));
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
  cityRender(locations);
};

export const locationHandle = (event) => {
  const cityName = event.target.dataset.cityname;
  if (cityName) {
    render(getCityInfo(cityName));
  } else if (event.target.tagName === "SPAN") {
    removeLocation(event.target.closest("p").dataset.cityname);
    cityRender(locations);
  }
};
