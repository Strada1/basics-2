import { UI_ELEMENTS } from './ui.js';
import { renderTabNow, renderFavoriteCities } from './render.js';
import { addCity, list } from './add-city.js';
import { tabs } from './tabs.js';
import { storage } from './local-storage.js';

// Tabs
UI_ELEMENTS.TAB_BUTTONS.forEach( item => item.addEventListener('click', tabs) );

//Show City in tab Now
UI_ELEMENTS.FORM.addEventListener( 'submit', event => {
  event.preventDefault();
  const CURRENT_CITY = UI_ELEMENTS.FORM_INPUT.value;
  renderTabNow(CURRENT_CITY);

  UI_ELEMENTS.TAB_NOW_ADD.classList.remove('tab__add-location_active');
  UI_ELEMENTS.FORM_INPUT.value = '';
} );

//Add favourite city
UI_ELEMENTS.TAB_NOW_ADD.addEventListener( 'click', function(){
  if( !this.classList.contains('tab__add-location_active') ){
    addCity(UI_ELEMENTS.TAB_NOW_CITY.textContent);
  }
} );

//Render
storage.getFavoriteCities();
renderFavoriteCities(list);
