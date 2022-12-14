import { storage } from "./storage.js";
import { insertDetailUIData, insertDataForecast } from "./UI.js";
const apiKey = '963072cd8104f7dac26bceb2c77dca9a'
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const serverForecast = 'http://api.openweathermap.org/data/2.5/forecast'
const getImageURL = (iconCode) =>
    `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
export const getForecastImgUrl = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
let cityName = 'mersin';
let weatherPicture = document.querySelector('.main__weather-sky');

let temperatureField = document.querySelector('.main__temperature');
let townField = document.querySelector('#nameTown');



let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    readName(event);
});
form.addEventListener('submit', function () {
    getGender(cityName)
});

export function readName(event) {
    event.preventDefault();
    console.log(event)
    let input = event.target.querySelector('input');
    cityName = input.value;
    console.log('aaa;' + cityName)
    input.value = '';
    return cityName;
}

export function getGender(cityName) {
    let url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error ocured AHTUNG')
            }
            storage.saveCurentTown(cityName);
            return response.json();
        })
        .then(data => {
            insertData(data);
        })
        .then(
            function () {
                url = `${serverForecast}?q=${cityName}&appid=${apiKey}`;
                fetch(url)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(data => insertDataForecast(data))

            }

        )
        // .catch(err => alert(err))
        .catch(error2 => alert(error2))


}

function insertData(data) {
    temperatureField.textContent = calculateCelsius(data.main.temp);
    townField.textContent = data.name;

    let img = document.createElement('img');
    img.className = 'main__weather-picture'
    img.src = getImageURL(data.weather[0].icon);
    weatherPicture.firstElementChild.replaceWith(img);
    document.querySelectorAll('h3').forEach(element => {
        element.textContent = data.name

    });
    let details = [
        { 'Temperature': temperatureField.textContent },
        { 'Feels like': calculateCelsius(data.main.feels_like) },
        { 'Weather': data.weather[0].main },
        { 'Sunrise': showTime(data.sys.sunrise) },
        { 'Sunset': showTime(data.sys.sunset) }
    ];

    insertDetailUIData(details);

}

function showTime(data) {
    let timeFull = new Date(data * 1000)
    let timeFormat = `${timeFull.getHours()}:${timeFull.getMinutes()}`
    return timeFormat;
}

export function calculateCelsius(kelvinDegrees) {
    return (Math.round(kelvinDegrees - 273) + '°')
}



