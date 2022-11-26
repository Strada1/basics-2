const UI_ELEMENTS = {
   INPUT: document.querySelector("#input"),
   ANS: document.querySelector("#ans"),
   FORM: document.querySelector("#form"),
}

let addAnsToDom = (gender, firstName) => {
   UI_ELEMENTS.ANS.textContent = `${firstName} is ${gender}`;
}

let handler = (event) => {
   event.preventDefault();
   const firstName = UI_ELEMENTS.INPUT.value;
   const serverUrl = 'https://api.genderize.io';
   const url = `${serverUrl}?name=${firstName}`;
   fetch(url)
      .then(response => response.json())
      .then(data => addAnsToDom(data.gender, firstName));
};

UI_ELEMENTS.FORM.addEventListener('submit', handler);