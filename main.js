document.querySelector('.tabs__items:nth-child(1)').click();
const weatherForm = document.querySelector('.weather__form');
const weatherDegree = document.querySelector('.weather__degree');
const weatherTown = document.querySelector('.town');
const weatherLike = document.querySelector('.like');
const list = document.getElementById('weather__list');
const weatherDetailsTown = document.querySelector('.weather__town');
const weatherDetailsDegree = document.querySelector('.weather__details__degree');
const weatherFeelsLike = document.querySelector('.weather__feels__like');
const weatherDetailsClouds = document.querySelector('.weather__details__clouds');
const weatherSunrise = document.querySelector('.weather__sunrise');
const weatherSunset = document.querySelector('.weather__sunset');
const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
let weatherList = JSON.parse(localStorage.getItem('list'));
weatherForm.addEventListener('submit', getWeatherList);
weatherLike.addEventListener('click', renderWithList);

if (localStorage.getItem('lastSelected')) {
    getNameList(localStorage.getItem('lastSelected'))
}

function getWeatherList(e) {
    e.preventDefault();
    const weatherInput = document.querySelector('.weather__input').value;
    getNameList(weatherInput)
    e.target.reset()
}

function getNameList(weatherInput) {
    fetch(`${serverUrl}?q=${weatherInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            weatherTown.textContent = data.name;
            weatherDetailsTown.textContent = data.name;
            weatherDegree.textContent = data.main.temp.toFixed(0) + "°";
            weatherDetailsDegree.textContent = data.main.temp.toFixed(0) + "°";
            weatherFeelsLike.textContent = data.main.feels_like.toFixed(0) + "°";
            weatherDetailsClouds.textContent = data.weather[0].main;
            let sunriseHours = new Date(data.sys.sunrise * 1000).getHours()
            let sunriseMinutes = new Date(data.sys.sunrise * 1000).getMinutes()
            weatherSunrise.textContent = (sunriseHours + ":" + sunriseMinutes);
            let sunsetHours = new Date(data.sys.sunset * 1000).getHours()
            let sunsetMinutes = new Date(data.sys.sunset * 1000).getMinutes()
            weatherSunset.textContent = (sunsetHours + ":" + sunsetMinutes);
        })
        .catch(error => alert(error.message));
}

function renderWithList() {
    const city = weatherTown.textContent;
    if (weatherList.includes(city)) {
        weatherList = weatherList.filter(item => item !== city);
        if (localStorage.getItem('lastSelected') && city === localStorage.getItem('lastSelected')) {
            localStorage.removeItem('lastSelected');
        }
    } else {
        weatherList.push(city);
    }
    render();
    localStorage.setItem('list', JSON.stringify(weatherList));
}

function render() {
    list.textContent = '';
    for (const city of weatherList) {
        const currentCity = city;
        let li = document.createElement('li')
        li.addEventListener('click', () => {
            getNameList(city);
            localStorage.setItem('lastSelected', city);
        });
        li.textContent = currentCity;
        list.append(li);
    }
}
render(list, weatherForm);
