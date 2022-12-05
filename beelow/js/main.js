
const UI_ELEMENTS = {
    MENU_NOW: document.querySelector('.left_menu__page_one'),
    MENU_DETAILS: document.querySelector('.left_menu__page_two'),
    MENU_FORECAST: document.querySelector('.left_menu__page_three'),
    BUTTON_NEW: document.querySelector('.container__now'),
    BUTTON_DETAILS: document.querySelector('.container__details'),
    BUTTON_FORECAST: document.querySelector('.container__forecast'),
    INPUT_FORM: document.querySelector('.input_form'),
    INPUT_TEXT: document.querySelector('.container__search_city__input'),
    LEFT_MENU_PAGE_NEW: document.querySelector('.left_menu__page_one'),
    INFO_TEMPERATURE: document.querySelector('.page_one__info__temperature'),
    IMG_WEATCHER: document.querySelector('.page_one__info__sign'),
    IMG_HEART: document.querySelector('.page_one__info__heart'),
    INFO_CITY: document.querySelector('.page_one__info__city'),
    CITY_LIST: document.querySelector('.city_list')
};


let currentCity = 'Moscow';
let cityFavoriteList = [];

// let currentCity = storage.getCurrentCity();
// let cityFavoriteList = storage.getCityFavoriteList();

UI_ELEMENTS.BUTTON_NEW.addEventListener('click', swapOnNow)
UI_ELEMENTS.BUTTON_DETAILS.addEventListener('click', swapOnDetails)
UI_ELEMENTS.BUTTON_FORECAST.addEventListener('click', swapOnForecast)

UI_ELEMENTS.INPUT_FORM.addEventListener('submit', function (event) {
    event.preventDefault();
    searchCity(UI_ELEMENTS.INPUT_TEXT.value)
    UI_ELEMENTS.INPUT_FORM.reset();
})

UI_ELEMENTS.IMG_HEART.addEventListener('click', function () {
    addCityFavorite(currentCity)
    console.log(cityFavoriteList);
    console.log(`add '${currentCity}'`)
})

document.addEventListener('DOMContentLoaded', getContnetLoaded);


function swapOnNow() {
    UI_ELEMENTS.MENU_NOW.hidden = false
    UI_ELEMENTS.MENU_DETAILS.hidden = true
    UI_ELEMENTS.MENU_FORECAST.hidden = true

    UI_ELEMENTS.BUTTON_NEW.style.background = '#000';
    UI_ELEMENTS.BUTTON_NEW.style.color = '#fff';
    UI_ELEMENTS.BUTTON_NEW.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_NEW.style.cursor = 'pointer'

    UI_ELEMENTS.BUTTON_DETAILS.style.background = '#cac7be';
    UI_ELEMENTS.BUTTON_DETAILS.style.color = '#000';
    UI_ELEMENTS.BUTTON_DETAILS.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_DETAILS.style.cursor = 'pointer'

    UI_ELEMENTS.BUTTON_FORECAST.style.background = '#cac7be';
    UI_ELEMENTS.BUTTON_FORECAST.style.color = '#000';
    UI_ELEMENTS.BUTTON_FORECAST.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_FORECAST.style.cursor = 'pointer'
}

function swapOnDetails() {
    UI_ELEMENTS.MENU_NOW.hidden = true
    UI_ELEMENTS.MENU_DETAILS.hidden = false
    UI_ELEMENTS.MENU_FORECAST.hidden = true

    UI_ELEMENTS.BUTTON_NEW.style.background = '#cac7be';
    UI_ELEMENTS.BUTTON_NEW.style.color = '#000';
    UI_ELEMENTS.BUTTON_NEW.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_NEW.style.cursor = 'pointer'

    UI_ELEMENTS.BUTTON_DETAILS.style.background = '#000';
    UI_ELEMENTS.BUTTON_DETAILS.style.color = '#fff';
    UI_ELEMENTS.BUTTON_DETAILS.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_DETAILS.style.cursor = 'pointer'

    UI_ELEMENTS.BUTTON_FORECAST.style.background = '#cac7be';
    UI_ELEMENTS.BUTTON_FORECAST.style.color = '#000';
    UI_ELEMENTS.BUTTON_FORECAST.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_FORECAST.style.cursor = 'pointer'
}

function swapOnForecast() {
    UI_ELEMENTS.MENU_NOW.hidden = true
    UI_ELEMENTS.MENU_DETAILS.hidden = true
    UI_ELEMENTS.MENU_FORECAST.hidden = false

    UI_ELEMENTS.BUTTON_NEW.style.background = '#cac7be';
    UI_ELEMENTS.BUTTON_NEW.style.color = '#000';
    UI_ELEMENTS.BUTTON_NEW.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_NEW.style.cursor = 'pointer'

    UI_ELEMENTS.BUTTON_DETAILS.style.background = '#cac7be';
    UI_ELEMENTS.BUTTON_DETAILS.style.color = '#000';
    UI_ELEMENTS.BUTTON_DETAILS.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_DETAILS.style.cursor = 'pointer'

    UI_ELEMENTS.BUTTON_FORECAST.style.background = '#000';
    UI_ELEMENTS.BUTTON_FORECAST.style.color = '#fff';
    UI_ELEMENTS.BUTTON_FORECAST.style.border = '1px solid #000000'
    UI_ELEMENTS.BUTTON_FORECAST.style.cursor = 'pointer'
}


const storage = {
    saveCityFavoriteList: function (cityFavoriteList) {
        localStorage.setItem('cityFavoriteList', JSON.stringify(cityFavoriteList));
    },
    saveCurrentCity: function (currentCity) {
        localStorage.setItem('currentCity', currentCity);
    },
    getCityFavoriteList: function () {
        return JSON.parse(localStorage.getItem('cityFavoriteList'));
    },
    getCurrentCity: function () {
        return localStorage.getItem('currentCity');
    },
}

function getContnetLoaded() {
    searchCity(currentCity);
    renderRightTabUi();
}


function searchCity(name) {
    const cityName = name;
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(currentCity.length = 0)
        .then(data => {
            renderLeftTabUi(data);
            currentCity = data.name;
            storage.saveCurrentCity(currentCity);
            console.log(currentCity)
        })
        .catch(alert)
}

function addCityFavorite(newCityFavorite) {
    let findName = cityFavoriteList.findIndex(function (findName) {
        return findName.name === newCityFavorite;
    });
    if (findName >= 0) {
        alert('Такой город уже есть');
        return;
    } else if (newCityFavorite === "") {
        alert('Введите название города');
    } else {
        cityFavoriteList.push({
            name: newCityFavorite,
        });
    }
    renderRightTabUi()
}

function cityFavoriteToLeftTab(name) {
    searchCity(name)
    console.log(cityFavoriteList);
}

function pushRightTabUi(city, index, cityRender) {
    let divCity = document.createElement('div');
    let nameCity = document.createElement('a');
    let deleteButton = document.createElement('a');

    divCity.id = index;
    nameCity.className = 'view_city'
    nameCity.textContent = city.name
    deleteButton.className = 'delete_city'
    deleteButton.textContent = ' ✕'

    cityRender.append(divCity);
    divCity.append(nameCity)
    divCity.append(deleteButton)

    deleteButton.addEventListener("click", function () {
        deleteCity(divCity.id);
    });

    nameCity.addEventListener("click", function () {
        cityFavoriteToLeftTab(city.name);
    });

}

function renderRightTabUi() {
    UI_ELEMENTS.CITY_LIST.innerHTML = "";

    cityFavoriteList.forEach(function (city, index) {
        cityRender = UI_ELEMENTS.CITY_LIST
        pushRightTabUi(city, index, cityRender);
    })
    storage.saveCityFavoriteList(cityFavoriteList)
}

function deleteCity(idTask) {
    cityFavoriteList.splice(idTask, 1);
    console.log('Удален из избранного');
    console.log(cityFavoriteList)
    renderRightTabUi()
}

function renderLeftTabUi(data) {
    // New
    UI_ELEMENTS.INFO_TEMPERATURE.textContent = `${Math.round(data.main.temp - 273.15)}°`
    UI_ELEMENTS.IMG_WEATCHER.src = `http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`
    UI_ELEMENTS.INFO_CITY.textContent = data.name


    // Detail

    // Forecast

    console.log(data);
}


