import { API, SRC_IMG } from './data.js';
import { ELEMENT, CLASS } from './ui.js';
import { render } from './render.js';

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
  if (!favoritesList.includes(cityName)) {
    favoritesList = favoritesList.concat(cityName);
    ELEMENT.LIKE.src = SRC_IMG.BLACK_HEART;
    ELEMENT.LIKE.classList.add(CLASS.ACTIVE_LIKE);
  } else {
    favoritesList = favoritesList.filter((city) => {
      ELEMENT.LIKE.src = SRC_IMG.HEART;
      ELEMENT.LIKE.classList.remove(CLASS.ACTIVE_LIKE);
      return city !== cityName;
    });
  }
  storage.saveFavoritesList(favoritesList);
  render();
}

export { currentCity, favoritesList, changeFavoritesList, storage };
