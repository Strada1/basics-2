const serverUrl = "https://api.genderize.io";

function getName() {
  const firstName = document.querySelector(".name_holder").value;
  if (firstName) {
    getUrl(firstName);
  } else alert("Name is empty");
}

function getUrl(name) {
  const url = `${serverUrl}?name=${name}`;
  const response = fetch(url);
  response
    .then((resp) => resp.json())
    .then((value) => {
      const gender = value.gender;
      showGender(gender, name);
    });
}

function showGender(gender, name) {
  let result = document.querySelector(".result_label");
  result.textContent = `${name} is ${gender}`;
}

let button = document.querySelector(".submit_button");
button.addEventListener("click", function (event) {
  event.preventDefault();
  getName();
});
