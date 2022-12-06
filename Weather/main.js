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
const nowBlockEl = {
    nowDegrees: document.querySelector('.main-number'),
    nowCity: document.querySelector('.main-forecast-city'),
    nowHeart: document.querySelector('.like'),
    nowIcon: document.querySelector('.main-forecast-img'),
};
const detailsBlockEl = {
    detailsCity: document.querySelector('.main-location-cities'),
    detailsTemp: document.querySelector('.det-temp'),
    detailsFeel: document.querySelector('.det-feel'),
    detailsWeather: document.querySelector('.det-weather'),
    detailsSunrise: document.querySelector('.det-sunrise'),
    detailsSunset: document.querySelector('.det-sunset'),
}
let divList = document.querySelector('.div-list');
let listArr = [];
if(localStorage.getItem('listArr')) {
    listArr = JSON.parse(localStorage.getItem('listArr'));
    showList();
}

function showList() {
    divList.innerHTML = '';
    listArr.forEach((item)=> {
        createCityEl(item);
    });
};

formElements.mainForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    toggleLike(formElements.cityInput.value);
    getRequest(serverUrl, formElements.cityInput.value);
    formElements.cityInput.value = '';
});

nowBlockEl.nowHeart.addEventListener('click', () =>{
    addToarr(nowBlockEl.nowCity.textContent);
    localStorage.setItem('listArr', JSON.stringify(listArr));
    showList();
});

tabs.allBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId)
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
            nowBlockEl.nowHeart.classList.remove('heart');
            nowBlockEl.nowHeart.classList.add('like');
        } else {
            listArr.push(newCity);
            nowBlockEl.nowHeart.classList.add('heart');
            nowBlockEl.nowHeart.classList.remove('like');
        }
    } catch(err) {
        console.log('Ошибка');
    }
};

function toggleLike(name) {
    if(listArr.includes(name)) {
        nowBlockEl.nowHeart.className = 'heart';
    } else {
        nowBlockEl.nowHeart.className = 'like';
    }
};

function deleteFromArr(cityName) {
    let res = listArr.findIndex(function(item) {
        return cityName == item;
    })
    listArr.splice(res, 1);
    localStorage.setItem('listArr', JSON.stringify(listArr))
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
        renderDetails(data)
    });
};

function renderData(value) {
    nowBlockEl.nowDegrees.textContent = getCelsius(value.main.temp) + '℃';
    nowBlockEl.nowCity.textContent = value.name;
    nowBlockEl.nowIcon.src = `http://openweathermap.org/img/wn/${value.weather[0].icon}@4x.png`;
};

function renderDetails(value) {
    detailsBlockEl.detailsCity.textContent = value.name;
    detailsBlockEl.detailsTemp.textContent = getCelsius(value.main.temp) + '℃';
    detailsBlockEl.detailsFeel.textContent = getCelsius(value.main.feels_like) + '℃';
    detailsBlockEl.detailsWeather.textContent = value.weather[0].main;
    detailsBlockEl.detailsSunrise.textContent = new Date(1000 * value.sys.sunrise);
    detailsBlockEl.detailsSunset.textContent = new Date(1000 * value.sys.sunset);
};

function getCelsius(num) {
    try{
        if(isNaN(num)) throw new SyntaxError('Ошибка');
        let res = Math.floor(num - 273.15);
        return res;
    } catch(err) {
        console.log('Ошибка');
    }
};

function createCityEl(name) {
    let newEl = document.createElement('li');
    newEl.className = 'cityList';
    newEl.textContent = name;
    newEl.addEventListener('click', function(item) {
        toggleLike(name);
    })
    let cross = document.createElement('button');
    cross.textContent = '+';
    cross.className = 'cross';
    newEl.append(cross); 
    divList.append(newEl);
    newEl.addEventListener('click', () =>{
        getRequest(serverUrl, name);
    })
    cross.addEventListener('click', () => {
        deleteFromArr(name);
    });
};
