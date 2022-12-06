import { ELEMENT } from './ui.js';
import { API } from './data.js';
import { render, updateLike } from './render.js';

const storage = {
  saveFavoritesList: function (favoritesList) {
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  },
  saveCurrentCity: function (currentCity) {
    localStorage.setItem('currentCity', currentCity);
  },
  getFavoritesList: function () {
    return JSON.parse(localStorage.getItem('favoritesList'));
  },
  getCurrentCity: function () {
    return localStorage.getItem('currentCity');
  },
};

let favoritesList = storage.getFavoritesList() || [];
let currentCity = storage.getCurrentCity() || API.START_CITY;

function changeFavoritesList() {
  const cityName = ELEMENT.ACTIVE_CITY.textContent;
  favoritesList.includes(cityName)
    ? (favoritesList = favoritesList.filter((city) => city !== cityName))
    : (favoritesList = favoritesList.concat(cityName));
  storage.saveFavoritesList(favoritesList);
  updateLike(cityName);
  render();
}

export { currentCity, favoritesList, changeFavoritesList, storage };
