import { UI_ELEMENTS } from "./ui.js";

const serverUrl = 'https://api.genderize.io';

UI_ELEMENTS.FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = UI_ELEMENTS.INPUT.value;
  getGender(firstName);
  event.target.reset();
});

async function getGender(firstName) {
  const url = `${serverUrl}?name=${firstName}`;
  const promise = await fetch(url);
  const gender = await promise.json();
  showGender(gender);
}

function showGender(gender) {
  if (gender.gender === null) {
    UI_ELEMENTS.OUTPUT.textContent = 'Enter Latin name!';
    return;
  }
  UI_ELEMENTS.OUTPUT.textContent = `${gender.name} is ${gender.gender}`;
}