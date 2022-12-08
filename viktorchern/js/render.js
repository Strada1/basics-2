import { UI_ELEMENTS } from './ui.js';
import { ERRORS } from './ERRORS.js';
import { createElement } from './add-city.js';
import { deleteCity } from './delete-city.js';
import { storage } from './local-storage.js';

export function renderTabNow(currentCity) {
  const serverUrl = 'http://api.openweathermap.org/';
  // const cityName = currentCity;
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;

  //First tab render
  try {
    if( currentCity === '' ) {
      throw new SyntaxError(ERRORS.INPUT_EMPTY);
    } else if ( !currentCity ) {
      throw new SyntaxError(ERRORS.INPUT_ERROR);
    }
    fetch(url)
      .then(
        response => {
          if ( !response.ok ) {
            throw new SyntaxError(ERRORS.FETCH_ERROR);
          }
          return response.json();
        }
      )
      .then( data => {
        const IMG_ALT = data.weather[0].description;
        const IMG_ICON = data.weather[0].icon;

        // console.log(data);
        UI_ELEMENTS.TAB_NOW_CITY.textContent = data.name;
        UI_ELEMENTS.TAB_NOW_TEMP.textContent = `${Math.floor(data.main.temp)}°`;

        UI_ELEMENTS.TAB_NOW_IMG.src = `https://openweathermap.org/img/wn/${IMG_ICON}@2x.png`;
        UI_ELEMENTS.TAB_NOW_IMG.alt = IMG_ALT;
      } )
      .catch( err => alert(err.message));
  } catch(err) {
    alert(err.message);
  }
}

export function renderFavoriteCities(favoriteCities){
  UI_ELEMENTS.LOCATIONS.textContent = '';

  favoriteCities.forEach(item => {
    let cityItem = createElement('li', item);
    
    cityItem.addEventListener('click', function(){
      const CITY = this.textContent;
      renderTabNow(CITY);
      const ADD_LOCATION = UI_ELEMENTS.TAB_NOW_ADD;
      ADD_LOCATION.classList.add('tab__add-location_active');
      ADD_LOCATION.addEventListener('click', deleteCity);
    });
    UI_ELEMENTS.LOCATIONS.prepend(cityItem);
  });
}