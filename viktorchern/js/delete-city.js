import { UI_ELEMENTS } from './ui.js';
import { renderFavoriteCities, list } from './render.js';
import { storage } from './local-storage.js';

export function deleteCity(event) {
  const CURRENT_CITY = UI_ELEMENTS.TAB_NOW_CITY.textContent;
  const CURRENT_CITY_INDEX = list.indexOf(CURRENT_CITY);

  this.classList.remove('tab__add-location_active');

  list.splice(CURRENT_CITY_INDEX, 1);
  storage.setFavoriteCities(list);

  renderFavoriteCities();

  this.removeEventListener('click', deleteCity);
}