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

const forecastBlockEl = {
    forecastCity: document.querySelector('.main-forecast-cities'),
    forecastDate: document.querySelector('.forecast_date'),
    forecastTime: document.querySelector('.forecast_time'),
    forecastTemp: document.querySelector('.forecast_temper'),
    forecastCondition: document.querySelector('.forecast_cond'),
    forecastFeel: document.querySelector('.forecast_feelLike'),
    forecastPict: document.querySelector('.forecast_pict'),
    forecastBlock: document.querySelector('.for'),

}
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let divList = document.querySelector('.div-list');
let listArr = ['Moscow', 'Kazan',];

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
    getForecastRequest(forecastUrl, formElements.cityInput.value);
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

function getForecastRequest(link, cityName) {
    fetch(`${link}?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(result => {
        let list = result.list;
        let spliceList = list.splice(0, 5);
        console.log(spliceList)
        forecastBlockEl.forecastCity.textContent = result.city.name;
        forecastBlockEl.forecastBlock.innerHTML = '';
        spliceList.forEach(function(item) {
            createForecastEl(item);
        });
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
    detailsBlockEl.detailsSunrise.textContent = getHumanHours(new Date(value.sys.sunrise * 1000));
    detailsBlockEl.detailsSunset.textContent = getHumanHours(new Date(value.sys.sunset * 1000));
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

function getHumanHours(date) {
    let H = addZeroToNumber(date.getHours());
    let M = addZeroToNumber(date.getMinutes());
    return `${H}:${M}`
};

function dateTimeToHuman(value) {
    let day = value.getDate();
    let month = months[value.getMonth()];
    return `${day} ${month}`
}

function addZeroToNumber(value) {
    return (value < 10) ? '0' + value : value
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
    
    forecastDateTime.prepend(forecastTime);
    forecastDateTime.prepend(forecastDate);

    let forecastTempCondition = document.createElement('div');
    forecastTempCondition.className = 'forecast_temp_condition';
    let forecastTemp = document.createElement('p');
    forecastTemp.className = 'forecast_temp';
    forecastTemp.textContent = `Temperature: ${getCelsius(value.main.temp)}`;
    let forecastCond = document.createElement('p');
    forecastCond.className = 'forecast_cond';
    forecastCond.textContent = `${value.weather[0].description}`;

    forecastTempCondition.prepend(forecastCond);
    forecastTempCondition.prepend(forecastTemp);

    let forecastFeelPict = document.createElement('div');
    forecastFeelPict.className = 'forecast_feel_pict';
    let forecastFeel = document.createElement('p');
    forecastFeel.className = 'forecast_feel';
    forecastFeel.textContent = `Feels like: ${getCelsius(value.main.feels_like)}`
    let forecastPict = document.createElement('img');
    forecastPict.className = 'forecast_pict';
    forecastPict.src = `http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png;`
    //forecastPict.src = `img/forecast_img.svg`;
    forecastFeelPict.prepend(forecastPict);
    forecastFeelPict.prepend(forecastFeel);

    forecastBlock.prepend(forecastFeelPict);
    forecastBlock.prepend(forecastTempCondition);
    forecastBlock.prepend(forecastDateTime);

    forecastBlockEl.forecastBlock.append(forecastBlock)
}