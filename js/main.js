import { UI_ELEMENTS } from "./ui.js";

const serverUrl = 'https://api.genderize.io';

UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  getGender(UI_ELEMENTS.INPUT.value);
  event.target.reset();
});

async function getGender(name) {
  const url = `${serverUrl}?name=${name}`;
  const promise = await fetch(url);
  const gender = await promise.json();
  showGender(gender);
}

function showGender(gender) {
  UI_ELEMENTS.OUTPUT.textContent = `${gender.name} is ${gender.gender}`;
}