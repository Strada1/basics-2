/*const btn = document.querySelector('.btn');
let inputName = document.querySelector('.input');
let out = document.querySelector('.out');

const serverUrl = 'https://api.genderize.io';

btn.addEventListener('click', function() {
    let firstName = inputName.value
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
    .then(response => response.json())
    .then(res => {
        out.innerHTML = `${firstName} is ${res.gender}`;
    });
}) 
 */

const btn = document.querySelector('.btn');
let inputName = document.querySelector('.input');
let out = document.querySelector('.out');
const serverUrl = 'https://api.genderize.io';

btn.addEventListener('click', function() {
    getResponse(serverUrl, inputName.value);
})

function getResponse(link, name) {
    fetch(`${link}?name=${name}`)
    .then(response => response.json())
    .then(res => {
        render(res);
    });
}

function render(value) {
    out.innerHTML +=  `<div>${value.name} is ${value.gender}</div>`;
}







