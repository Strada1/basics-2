const serverUrl = "https://api.genderize.io";

const UI_ELEMENT = {
  FORM: document.querySelector("form"),
  FIRST_NAME: document.querySelector(".input-name"),
  BLOCK_RESULT: document.querySelector(".block-result"),
};

function findGenderByName(firstName) {
  const url = `${serverUrl}?name=${firstName}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      showResult(firstName, result.gender);
    });
}

function showResult(name, gender) {
  const nameWrapper = document.createElement("span");
  nameWrapper.className = "result";
  switch (gender) {
    case null:
      nameWrapper.textContent = `Oops, we can't find a match for ${name}`;
      nameWrapper.style.backgroundColor = "rgba(151, 14, 39, 0.2)";
      break;
    case "male":
      nameWrapper.textContent = `${name} is ${gender}`;
      nameWrapper.style.backgroundColor = "rgba(0, 18, 82, 0.2)";
      break;
    case "female":
      nameWrapper.textContent = `${name} is ${gender}`;
      nameWrapper.style.backgroundColor = "rgba(120, 0, 117, 0.2)";
      break;
  }
  UI_ELEMENT.BLOCK_RESULT.append(nameWrapper);
}

UI_ELEMENT.FORM.addEventListener("submit", (event) => {
  findGenderByName(UI_ELEMENT.FIRST_NAME.value);
  event.preventDefault();
  event.target.reset();
});

/* async function findGenderByName(firstName) {
  const url = `${serverUrl}?name=${firstName}`;
  const response = await fetch(url);
  const result = await response.json();
  const gender = result.gender;
  showResult(firstName, gender);
} */
