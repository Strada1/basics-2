import { UI_ELEMENTS } from "./ui.js";
window.location.hash = "now";

UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('test')
})