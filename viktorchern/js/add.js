import { LIST } from './LIST.js';
import { ERRORS } from './ERRORS.js';
import { UI_ELEMENTS } from './ui.js';

export function addCity(city) {
  try {

    console.log(LIST.includes(city));

    if( LIST.includes(city) ){
      throw new SyntaxError(ERRORS.ADD_ADDED);
    }
    LIST.push(city);
    render();
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

function render() {
  UI_ELEMENTS.LOCATIONS.textContent = '';

  LIST.forEach(function(item){
    UI_ELEMENTS.LOCATIONS.prepend(createElement('li', item));

    //.addEventListener('click', showLocation)
  });
}

