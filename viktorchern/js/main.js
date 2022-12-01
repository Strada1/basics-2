import { UI_ELEMENTS } from './ui.js';
import { ERRORS } from './ERRORS.js';
import { addCity } from './add.js';

// Tabs
function tab(event){
  const TAB_ID = this.dataset.tab;

  UI_ELEMENTS.TAB__ITEMS.forEach( item => item.style.display = 'none' );
  document.querySelector('.tab__item[data-tab="'+TAB_ID+'"]').style.display = 'flex';

  UI_ELEMENTS.TAB_BUTTONS.forEach( item => item.classList.remove('tab__button_active') );
  this.classList.add('tab__button_active');
}
UI_ELEMENTS.TAB_BUTTONS.forEach( item => item.addEventListener('click', tab) );

function createWeatherImg(icon, alt){
  const IMG = document.createElement('img');
  IMG.setAttribute('alt', alt);
  IMG.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
  return IMG;
}

function showWeather(event){
  event.preventDefault();
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const cityName = UI_ELEMENTS.FORM_INPUT.value;
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

        console.log(data);
        UI_ELEMENTS.TAB_NOW_CITY.textContent = data.name;
        UI_ELEMENTS.TAB_NOW_TEMP.textContent = `${Math.floor(data.main.temp)}°`;

        UI_ELEMENTS.TAB_NOW_IMG.replaceWith(createWeatherImg(IMG_ICON, IMG_ALT));
      } )
      .catch( err => alert(err.message));
  } catch(err) {
    alert(err.message);
  }
}
UI_ELEMENTS.FORM_BUTTON.addEventListener('click', showWeather);

//Add city
UI_ELEMENTS.TAB_NOW_ADD.addEventListener( 'click', function(){
  addCity(UI_ELEMENTS.TAB_NOW_CITY.textContent);
  // console.log( LIST );
} );