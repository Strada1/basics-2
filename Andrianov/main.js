
const result = document.querySelector('.result');
const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName'); 
const serverUrl = 'https://api.genderize.io';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = `${serverUrl}?name=${e.target[0].value}`;

     fetch(url)
        .then((res) => res.json())
        .then((data) => {

            result.textContent =  `${data.name} is ${data.gender}`
    })
})

