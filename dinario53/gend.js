let inputName = document.querySelector("form");
inputName.addEventListener("submit", getName);
function getName(event) {
    event.preventDefault();
    findGender(event.target.querySelector("input").value)
}

function findGender(inpName) {
    const firstName = inpName;
    const serverUrl = "https://api.genderize.io";
    const url = `${serverUrl}?name=${firstName}`;

    fetch(url)
        .then(response => response.json())
        .then(value => addToUi(value));
}

function addToUi(value) {
    let newDiv = document.createElement("div")
    let place = document.querySelector(".gender-list")
    newDiv.textContent = `${value.name} is ${value.gender}`;
    place.prepend(newDiv)
}