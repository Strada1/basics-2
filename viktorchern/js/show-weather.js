import { UI_ELEMENTS } from './ui.js';
import { ERRORS } from './ERRORS.js';

function createWeatherImg(icon, alt){
  const IMG = document.createElement('img');
  IMG.setAttribute('alt', alt);
  IMG.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
  return IMG;
}

export function showWeather(city){
  event.preventDefault();
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const cityName = city;
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  
  try {
    if( cityName === '' ) {
      throw new SyntaxError(ERRORS.INPUT_EMPTY);
    } else if ( !cityName ) {
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

        UI_ELEMENTS.TAB_NOW_IMG.replaceWith(createWeatherImg(IMG_ICON, IMG_ALT));
      } )
      .catch( err => alert(err.message));
  } catch(err) {
    alert(err.message);
  }
}