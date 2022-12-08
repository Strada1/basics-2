import { ERRORS } from './ERRORS.js';
import { UI_ELEMENTS } from './ui.js';
import { renderFavoriteCities } from './render.js';
import { storage } from './local-storage.js';

export let list = [];
export let favouriteCity = 'Moscow';

// const FAVORITE_CITIES = storage.getFavoriteCities();
// alert(FAVORITE_CITIES);
// const CHECK_CITY_NULL = (currentCity) => {
//   if( FAVORITE_CITIES === null ) {
//     return true;
//   }
// }



export function addCity( currentCity ) {
  const CHECK_CITY_REPEAT = list.includes(currentCity);
  try {
    if( CHECK_CITY_REPEAT ) {
      throw new SyntaxError( ERRORS.ADD_ADDED );
    }
    list.push(currentCity);
    renderFavoriteCities(list);
    console.log(list);
  } catch(err) {
    alert(err.message);
  }
}

export function createElement(tag, text){
  const HTML_ELEMENT = document.createElement(tag);
  if( text ){
    HTML_ELEMENT.textContent = text;
  }
  return HTML_ELEMENT;
}