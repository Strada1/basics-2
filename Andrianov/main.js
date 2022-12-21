
import { storage } from "./storage.js"

const form = document.querySelector('.form');
const nowCityName = document.querySelector('.now__cityName');
const nowTemp = document.querySelector('.now__temp');
let nowImg = document.querySelector('.now__img');
const nowIcon = document.querySelector('.now__icon');
const favoritIcon = document.querySelector('.heart');
const cityList = document.querySelector('.city__list');
const detailsTemp = document.querySelector('.details__temp');
const detailsFeelsLike = document.querySelector('.details__feelsLike');
const detailsWeather = document.querySelector('.details__weather');
const detailsCity = document.querySelector('.details__city');
const detailsSunrise = document.querySelector('.details__sunrise');
const detailsSunset = document.querySelector('.details__sunset');
const forecastCityName = document.querySelector('.forecast__city');

favoritIcon.addEventListener('click',addCityList);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.search__input').value; 
    if(inputValue !== '') {
        getCity(inputValue)
    }
});

function getCity(value) {

    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const cityName = value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    
    fetch(url)
       .then((res) => res.json())
       .then((data) => { 
        //    console.log(data)
           getData(data)
   })
   .catch(error => alert(` ${error}`));
};

function getTime(timestamp, timezone) {
    let date = new Date(timestamp * 1000)
    let hours = date.getUTCHours() + timezone / 3600
    if (hours < 0) {
        hours = hours + 24
    }
    if (hours > 24) {
        hours = hours - 24
    }
    let minutes = "0" + date.getMinutes()
    return hours + ':' + minutes.slice(-2)
};

function getData ({
    name : cityName, 
    main : { feels_like, temp }, 
    weather : [ { description, icon } ], 
    sys : { sunrise, sunset }, 
    timezone, 
}) {
    
    nowCityName.textContent =  cityName;
    
    nowTemp.textContent = Math.round(temp)+` C°`;
    nowIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    detailsCity.textContent = cityName;
    detailsTemp.textContent = Math.round(temp)+` C°`;
    detailsFeelsLike.textContent = Math.round(feels_like)+` C°` ;
    detailsWeather.textContent = description;
    detailsSunrise.textContent = getTime(sunrise, timezone);
    detailsSunset.textContent  = getTime(sunset, timezone);

    forecastCityName.textContent = cityName;

     storage.currentCity = cityName;
     storage.saveCurrentCity(storage.currentCity);
};
function addCityList() {
    const city = nowCityName.textContent;
    const cityIndex = storage.list.indexOf(city);

    if (cityIndex === -1) {
      storage.list.push(city);
      storage.saveFavoriteCities(storage.list)
    } else {
      storage.list.splice(cityIndex, 1);
      storage.saveFavoriteCities(storage.list)
    }
    createFavouritItem();
};

function createFavouritItem() {
    storage.getFavoriteCities();

    if (storage.list === null) {
        storage.list = []
    }

    cityList.innerHTML = "";
    
    storage.list.forEach((item) => {
        let cityItem = document.createElement('div');
        cityItem.className = 'city__item';

        let city = document.createElement('div');
        city.className = 'city';
        city.textContent = item;
   
        let buttonDelete = document.createElement('div');
        buttonDelete.className = 'btn__delete';
        if(city.textContent !== "") {
            buttonDelete.textContent = '+';
        }
        cityList.prepend(cityItem);
        cityItem.prepend(city);
        cityItem.append(buttonDelete);
       
        city.addEventListener("click", () => {
                getCity(item)
        });
    
        buttonDelete.addEventListener("click", function () {
           
            cityItem.remove();  
        });
    })
};

storage.getCurrentCity();
storage.getFavoriteCities();
getCity(storage.currentCity);
createFavouritItem();
