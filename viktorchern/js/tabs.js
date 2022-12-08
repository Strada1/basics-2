import { UI_ELEMENTS } from './ui.js';

export function tabs(event){
  const TAB_ID = this.dataset.tab;

  UI_ELEMENTS.TAB__ITEMS.forEach( item => item.style.display = 'none' );
  document.querySelector('.tab__item[data-tab="'+TAB_ID+'"]').style.display = 'flex';

  UI_ELEMENTS.TAB_BUTTONS.forEach( item => item.classList.remove('tab__button_active') );
  this.classList.add('tab__button_active');
}