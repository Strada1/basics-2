import { UI_ELEMENTS } from './ui.js';
import { list } from './add-city.js';
import { renderTabNow, renderFavoriteCities } from './render.js';

export function deleteCity(event) {
  const CURRENT_CITY = UI_ELEMENTS.TAB_NOW_CITY.textContent;
  const CURRENT_CITY_INDEX = list.indexOf(CURRENT_CITY);

  UI_ELEMENTS.TAB_NOW_ADD.classList.remove('tab__add-location_active');

  list.splice(CURRENT_CITY_INDEX);
  renderFavoriteCities(list);

  console.log(list);
}