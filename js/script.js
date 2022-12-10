import { UI_ELEMENT } from "./constants.js";
import { render } from "./render.js";
import {
  formHandler,
  buttonHandler,
  cityHandler,
  favouritesHandler,
} from "./handlers.js";

UI_ELEMENT.FORM.addEventListener("submit", formHandler);
UI_ELEMENT.BUTTONS.addEventListener("mousedown", buttonHandler);
UI_ELEMENT.INFO_WINDOW.addEventListener("click", cityHandler);
UI_ELEMENT.FAVOURITES.addEventListener("click", favouritesHandler);

render.renderAllInfo();
