import { UI_ELEMENTS } from './ui.js';
import { showWeather } from './show-weather.js';
//import { ERRORS } from './ERRORS.js';
import { addCity, render } from './add.js';

// Tabs
function tab(event){
  const TAB_ID = this.dataset.tab;

  UI_ELEMENTS.TAB__ITEMS.forEach( item => item.style.display = 'none' );
  document.querySelector('.tab__item[data-tab="'+TAB_ID+'"]').style.display = 'flex';

  UI_ELEMENTS.TAB_BUTTONS.forEach( item => item.classList.remove('tab__button_active') );
  this.classList.add('tab__button_active');
}
UI_ELEMENTS.TAB_BUTTONS.forEach( item => item.addEventListener('click', tab) );

UI_ELEMENTS.FORM_BUTTON.addEventListener('click', function(){
  showWeather(UI_ELEMENTS.FORM_INPUT.value);
});

//Add city
UI_ELEMENTS.TAB_NOW_ADD.addEventListener( 'click', function(){
  addCity(UI_ELEMENTS.TAB_NOW_CITY.textContent);
  // console.log( LIST );
} );

//Render
render();