import { LIST } from './LIST.js';
import { ERRORS } from './ERRORS.js';
import { UI_ELEMENTS } from './ui.js';
import { showWeather } from './show-weather.js';

export function addCity(city) {
  try {
    console.log(!UI_ELEMENTS.TAB_NOW_ADD.classList.contains('tab__add-location_active'));

    if( LIST.includes(city) && !UI_ELEMENTS.TAB_NOW_ADD.classList.contains('tab__add-location_active') ){
      throw new SyntaxError(ERRORS.ADD_ADDED);
    }
    if( !UI_ELEMENTS.TAB_NOW_ADD.classList.contains('tab__add-location_active') ){
      LIST.push(city);
      render();
    }
    
  } catch(err) {
    alert(err.message);
  }
}

function createElement(tag, text){
  const HTML_ELEMENT = document.createElement(tag);
  if( text ){
    HTML_ELEMENT.textContent = text;
  }
  return HTML_ELEMENT;
}

export function render() {
  UI_ELEMENTS.LOCATIONS.textContent = '';

  LIST.forEach(function(item){
    let cityItem = createElement('li', item);
    cityItem.addEventListener('click', function(){
      const CITY = this.textContent;
      showWeather(CITY);
      const ADD_LOCATION = UI_ELEMENTS.TAB_NOW_ADD;
      ADD_LOCATION.classList.add('tab__add-location_active');
      ADD_LOCATION.addEventListener('click', deleteCity)
    });
    UI_ELEMENTS.LOCATIONS.prepend(cityItem);
  });
}

function deleteCity(event) {
  const CURRENT_CITY = UI_ELEMENTS.TAB_NOW_CITY.textContent;
  const CURRENT_CITY_INDEX = LIST.indexOf(CURRENT_CITY);

  UI_ELEMENTS.TAB_NOW_ADD.classList.remove('tab__add-location_active');

  LIST.splice(CURRENT_CITY_INDEX);
  render();
  
}