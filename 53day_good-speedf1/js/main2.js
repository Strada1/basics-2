import { UI_ELEMENTS } from "./UI.js";

window.location.hash = "now";


const form = document.querySelector('.form');
const city__name = document.querySelector('.city__name');
const now__temp = document.querySelector('.now__temp');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const cityName = 'boston';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
let degrees;
const cityName = document.querySelector('.search__input'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(apiKey)
    const url = `${serverUrl}?q=${e.target[0].value}&appid=${apiKey}&units=metric`;

     fetch(url)
        .then((res) => res.json())
        .then((data) => { 
            console.log(data)
            city__name.textContent =  `${data.name}`
            now__temp.textContent = Math.round(`${data.main.temp}`)+` C°`
    })
})