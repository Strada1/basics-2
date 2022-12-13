const tabs = {
    allBtn: document.querySelectorAll('.btn-nav'),
    allTabs: document.querySelectorAll('.tabs_block'),
}

const formElements = {
    mainForm: document.querySelector('.main-form'),
    cityInput: document.querySelector('.city-input'),
};

const serverUrl= 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';

const nowBlockEl = {
    degrees: document.querySelector('.main-number'),
    city: document.querySelector('.main-forecast-city'),
    heart: document.querySelector('.like'),
    icon: document.querySelector('.main-forecast-img'),
};

const detailsBlockEl = {
    city: document.querySelector('.main-location-cities'),
    temp: document.querySelector('.det-temp'),
    feel: document.querySelector('.det-feel'),
    weather: document.querySelector('.det-weather'),
    sunrise: document.querySelector('.det-sunrise'),
    sunset: document.querySelector('.det-sunset'),
}

const forecastBlockEl = {
    city: document.querySelector('.main-forecast-cities'),
    block: document.querySelector('.for'),
}

let divList = document.querySelector('.div-list');

export {tabs, formElements, serverUrl, apiKey, forecastUrl, nowBlockEl, detailsBlockEl, forecastBlockEl, divList};