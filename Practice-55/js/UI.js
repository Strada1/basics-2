import { removeLocationListItem, chekCityRepeat } from './main.js';
import { getGender, calculateCelsius, getForecastImgUrl, readName } from './getTown.js';
import { storage } from './storage.js';
export let locationList;

let detailsDataUIElements = document.querySelectorAll('[data-set="Details"]');

let locationListUI = document.querySelectorAll('.right-column__line');
const heart = document.querySelector('.main_region-heart');
let locationAdd = document.querySelector('.right-colum__add-location');

locationAdd.addEventListener('submit', function (event) {
    let town = readName(event);
    if (!chekCityRepeat(town)) {
        addLocation(town);
    } else {
        alert('Такой город есть в списке')
    }
})


if (storage.getFavoriteCities()) {
    locationList = storage.getFavoriteCities();
    heart.previousElementSibling.textContent = storage.getCurentTown();
    getGender(storage.getCurentTown());
} else {
    locationList = [];
    locationListUI.forEach(item => locationList.push(item.querySelector('p').textContent));
    storage.saveCurentTown(heart.previousElementSibling.textContent);
}


render()

heart.addEventListener('click', function (event) {
    let town = event.currentTarget.previousElementSibling.textContent;
    if (!chekCityRepeat(town)) {
        addLocation(town);
    } else {
        alert('Такой город есть в списке')
    }
})


function addLocation(town) {
    town = town[0].toUpperCase() + town.slice(1);
    locationList.unshift(town);
    render()
}

function render() {
    let locationListUI = document.getElementsByClassName('right-column__line');
    clearUI(locationListUI);
    storage.saveFavoriteCities(locationList)
    locationList.reverse().forEach(item => createUIElemnt(item))
    locationList.reverse();

}

function clearUI(divElement) {
    for (let index = divElement.length - 1; index >= 0; index--) {
        divElement[index].remove();
    }
}

// createUIElemnt('Moscow')

function createUIElemnt(town) {
    let newElement = locationListUI[0].cloneNode(true);
    let closeButton = newElement.querySelector('.right-column__line-close');
    newElement.querySelector('p').textContent = town;
    newElement.querySelector('p').addEventListener('click', function () {
        getGender(town)
    })
    closeButton.addEventListener('click', removeTown)
    document.querySelector('.right-colum__add-location').after(newElement)
}

function removeTown(event) {
    let town = event.currentTarget.previousElementSibling.textContent;
    locationList = removeLocationListItem(town);
    render()
}

export function insertDetailUIData(data) {
    clearDetails();
    let detailsUI = document.querySelector('[data-target="Details"]');

    data.forEach(element => {
        let newDetailUIElement = detailsDataUIElements[0].cloneNode(true);
        newDetailUIElement.textContent = `${Object.keys(element)} : ${element[Object.keys(element)]}`;
        detailsUI.append(newDetailUIElement);

    })
    /*  for (let key in data) {
  */
    // }
}


function clearDetails() {
    let detailsDataUIElements = document.querySelectorAll('[data-set="Details"]');
    for (let index = detailsDataUIElements.length - 1; index >= 0; index--) {
        detailsDataUIElements[index].remove();
    }
}


export function insertDataForecast(data) {
    let forecastUI = document.querySelector('[data-target="Forecast"]');
    let div = document.querySelectorAll('.main__details');
    clearUI(div) // TODO: Расскомментировать

    let calendar = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];


    data.list.forEach(item => {

        let time = new Date(item.dt * 1000);
        let day = time.getDate();
        let numberMonth = time.getMonth();
        let timeClock = time.getHours();
        let forecastBlockData = [
            `${day} ${calendar[numberMonth]}`,
            `Temperature: ${calculateCelsius(item.main.temp)}`,
            `Feels like: ${calculateCelsius(item.main.feels_like)}`,
            `${time.getHours()}:${(time.getMinutes() === 0) ? '00' : time.getMinutes()}`,
            `${item.weather[0].main}`,
            `${getForecastImgUrl(item.weather[0].icon)}`
        ];


        let newElement = div[0].cloneNode(true);
        let textDataUI = newElement.querySelectorAll('.main__data-left p')
        clearUI(textDataUI)

        for (let index = 0; index <= 2; index++) {
            let newTextDataUI = textDataUI[0].cloneNode(true);
            newTextDataUI.textContent = forecastBlockData[index];
            newElement.querySelector('.main__data-left').append(newTextDataUI);
        }

        textDataUI = newElement.querySelectorAll('.main__data-right p');

        newElement.querySelector('.main__data-right img').remove();
        clearUI(textDataUI)

        for (let index = 3; index <= 4; index++) {
            let newTextDataUI = textDataUI[0].cloneNode(true);
            newTextDataUI.textContent = forecastBlockData[index];
            newElement.querySelector('.main__data-right').append(newTextDataUI);
        }

        let img = document.createElement('img');
        img.src = forecastBlockData[5];
        img.className = 'main__weather-picture2'
        newElement.querySelector('.main__data-right').append(img);
        forecastUI.append(newElement)

    })
}