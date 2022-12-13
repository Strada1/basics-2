import {tabs, formElements, serverUrl, apiKey, forecastUrl, nowBlockEl, detailsBlockEl, forecastBlockEl, divList} from './modules/variables.js';
import storage from './modules/local.js';
import { getCelsius, getHumanHours, dateTimeToHuman} from './modules/countDateTime.js';
import { renderData, renderDetails } from './modules/renderData.js';

let listArr = ['Kazan'];
let currentCity;

if(storage.getFavCities() !== null) {
    listArr = storage.getFavCities();
    showList();
} else {
    listArr = [];
};

if(storage.getCurrentCity()) {
    currentCity = storage.getCurrentCity();
} else {
    currentCity = 'Moscow';
};

if(localStorage.getItem('heart')) {
    nowBlockEl.heart.classList.add(localStorage.getItem('heart'));
}

function showList() {
    divList.innerHTML = '';
    storage.setFavCities(listArr);
    listArr.forEach((item)=> {
        createCityEl(item);
    });
};

formElements.mainForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    formHandler();
});

nowBlockEl.heart.addEventListener('click', () =>{
    heartHandler();
});

function formHandler() {
    toggleLike(formElements.cityInput.value);
    getRequest(serverUrl, formElements.cityInput.value);
    getForecastRequest(forecastUrl, formElements.cityInput.value);
    formElements.cityInput.value = '';
}

function heartHandler() {
    addToarr(nowBlockEl.city.textContent);
    showList();
}

tabs.allBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        tabs.allBtn.forEach(function(item) {
            item.classList.remove('active');
        });
        tabs.allTabs.forEach(function(item) {
            item.classList.remove('active');
        });
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
});

function addToarr(name) {
    try{
        let newCity = name;
        if(listArr.find(item => item === newCity)) {
            deleteFromArr(newCity);
            nowBlockEl.heart.classList.remove('heart');
            nowBlockEl.heart.classList.add('like');
            //storage.setHeart('like');
            localStorage.setItem('heart', 'like')
        } else {
            listArr.push(newCity);
            nowBlockEl.heart.classList.add('heart');
            nowBlockEl.heart.classList.remove('like');
            //storage.setHeart('heart');
            localStorage.setItem('heart', 'heart')
        }
    } catch(err) {
        console.log('Ошибка');
    }
};

function toggleLike(name) {
    if(listArr.includes(name)) {
        nowBlockEl.heart.className = 'heart';
        localStorage.setItem('heart', 'heart')
        //storage.setHeart('heart')
    } else {
        nowBlockEl.heart.className = 'like';
        localStorage.setItem('heart', 'like')
        //storage.setHeart('like')
    }
};

function deleteFromArr(cityName) {
    let res = listArr.findIndex(function(item) {
        return cityName == item;
    })
    listArr.splice(res, 1);
    showList()
};

function getRequest(link, cityName) {
    fetch( `${link}?q=${cityName}&appid=${apiKey}`)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
        response.json()})
    .then(data => {
        renderData(data);
        renderDetails(data);
        currentCity = data.name;
        storage.setCurrentCity(currentCity);
    });
};

function getForecastRequest(link, cityName) {
    fetch(`${link}?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(result => {
        let list = result.list;
        let spliceList = list.splice(0, 5);
        forecastBlockEl.city.textContent = result.city.name;
        forecastBlockEl.block.innerHTML = '';
        spliceList.forEach(function(item) {
            createForecastEl(item);
        });
    });
};

if(storage.getNewCity('newCity') !== null) {
    nowBlockEl.city.textContent = storage.getNewCity('newCity');
} else {
    nowBlockEl.city.textContent = 'Moscow';
}

function createCityEl(name) {
    let newEl = document.createElement('li');
    newEl.className = 'cityList';
    newEl.textContent = name;
    newEl.addEventListener('click', function(item) {
        toggleLike(name);
        getRequest(serverUrl, name);
        getForecastRequest(forecastUrl, name);
    })
    let cross = document.createElement('button');
    cross.textContent = '+';
    cross.className = 'cross';
    newEl.append(cross); 
    divList.append(newEl);
    cross.addEventListener('click', () => {
        deleteFromArr(name);
    });
};

function createForecastEl(value) {
    let forecastBlock = document.createElement('div');
    forecastBlock.className = 'forecast-block';
    let forecastDateTime = document.createElement('div');
    forecastDateTime.className = 'forecast_date_time';
    let forecastDate = document.createElement('p');
    forecastDate.className = 'forecast_date';
    forecastDate.textContent = `${dateTimeToHuman(new Date(value.dt_txt))}`;
    let forecastTime = document.createElement('p');
    forecastTime.className = 'forecast_time';
    forecastTime.textContent = `${getHumanHours(new Date(value.dt_txt))}`;
    
    forecastDateTime.prepend(forecastDate, forecastTime);

    let forecastTempCondition = document.createElement('div');
    forecastTempCondition.className = 'forecast_temp_condition';
    let forecastTemp = document.createElement('p');
    forecastTemp.className = 'forecast_temp';
    forecastTemp.textContent = `Temperature: ${getCelsius(value.main.temp)}`;
    let forecastCond = document.createElement('p');
    forecastCond.className = 'forecast_cond';
    forecastCond.textContent = `${value.weather[0].description}`;

    forecastTempCondition.prepend( forecastTemp, forecastCond);

    let forecastFeelPict = document.createElement('div');
    forecastFeelPict.className = 'forecast_feel_pict';
    let forecastFeel = document.createElement('p');
    forecastFeel.className = 'forecast_feel';
    forecastFeel.textContent = `Feels like: ${getCelsius(value.main.feels_like)}`
    let forecastPict = document.createElement('img');
    forecastPict.className = 'forecast_pict';
    forecastPict.src = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
    forecastFeelPict.prepend(forecastFeel, forecastPict);

    forecastBlock.prepend(forecastDateTime, forecastTempCondition, forecastFeelPict,);

    forecastBlockEl.block.append(forecastBlock)
}
