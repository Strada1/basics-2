import { ELEMENTS_UI } from "./ui-elements.js"
import { storage } from "./storage.js"
import { convertKelvinToCelsius, convertTimestampToDate } from "./helpers.js"

storage.getCurrentCityFromStorage()
storage.getFavoriteCitiesFromStorage
getResult(storage.currentCity)
RenderForFavoriteList()

ELEMENTS_UI.TAB_LINKS.forEach(item => item.addEventListener('click', showTab))
ELEMENTS_UI.FAVORITE_BUTTON.addEventListener('click', addOrRemoveCityOnHeartButton)
ELEMENTS_UI.BUTTON_CLEAR_ALL.addEventListener("click", clearAllFavoriteList)
ELEMENTS_UI.FORM_SEARCH.addEventListener('submit', getCity)

function showTab() {
    ELEMENTS_UI.TAB_LINKS.forEach((item) => item.classList.remove('active'))
    event.target.classList.add('active')
    ELEMENTS_UI.TAB_CONTENTS.forEach((item) => {
        if (item.dataset.name === event.target.dataset.name) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

function addOrRemoveCityOnHeartButton() {
    const cityName = ELEMENTS_UI.CITY_NAME_NOW.textContent
    
    if (storage.listOfFavoriteCities.includes(cityName) === false) {
        ELEMENTS_UI.FAVORITE_BUTTON.classList.add('checked')
        storage.listOfFavoriteCities.push(cityName)
        
        storage.saveFavoriteCitiesInStorage(storage.listOfFavoriteCities) //  LIST ==>> storage
        
        RenderForFavoriteList()
    } else {
        ELEMENTS_UI.FAVORITE_BUTTON.classList.remove('checked')
        storage.listOfFavoriteCities = storage.listOfFavoriteCities.filter(item => item !== cityName)
        
        storage.saveFavoriteCitiesInStorage(storage.listOfFavoriteCities) //  LIST ==>> storage
        
        RenderForFavoriteList()
    }
}

function clearAllFavoriteList() {
    
    localStorage.clear()
    storage.listOfFavoriteCities = []
    storage.saveFavoriteCitiesInStorage(storage.listOfFavoriteCities) //  LIST ==>> storage
    getResult(storage.currentCity)
    RenderForFavoriteList()
    
};

function getCity() {
    if (ELEMENTS_UI.INPUT_SEARCH.value !== '') {
        event.preventDefault();
        getResult(ELEMENTS_UI.INPUT_SEARCH.value.trim())
        ELEMENTS_UI.INPUT_SEARCH.value = ''
    }
}

function getResult(nameFromInput) {
    
    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const cityName = nameFromInput;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&lang=ru`;
    
    let errorStatus = new Number

    let response = fetch(url)
    response
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return errorStatus = response.status
        }  
    })
    .then((data) => {
        console.log(data)
        showResult(data)
        ELEMENTS_UI.SYSTEM_MESSAGE_BLOCK.style.display = 'none'
    })
    .catch(function(err) {
        
        ELEMENTS_UI.SYSTEM_MESSAGE_BLOCK.style.display = 'block'
        
        if (errorStatus === 404) {
            ELEMENTS_UI.SYSTEM_MESSAGE_TEXT.textContent = `City not found. Please enter another city name..`
        } else {
            ELEMENTS_UI.SYSTEM_MESSAGE_TEXT.textContent = `Sorry, network failure. Please try again later..`
        }
        
        ELEMENTS_UI.SYSTEM_MESSAGE_CLOSE.addEventListener('click', function() {
            ELEMENTS_UI.SYSTEM_MESSAGE_BLOCK.style.display = 'none'
        })

        setTimeout(() => {
            ELEMENTS_UI.SYSTEM_MESSAGE_BLOCK.style.display = 'none'
        }, 7000)
    }) 
}


function showResult({ 
    name : cityName, 
    main : { feels_like, temp }, 
    weather : [ { description, icon } ], 
    sys : { sunrise, sunset }, 
    timezone, 
    }) {
 
    ELEMENTS_UI.CITY_NAME_NOW.textContent = cityName
    ELEMENTS_UI.CITY_NAME_DETAILS.textContent = cityName
    
    ELEMENTS_UI.WEATHER_DIV_CURRENT_TEMPER.style.display = 'inline'
    ELEMENTS_UI.WEATHER_SPAN_CURRENT_TEMPER.forEach(item => item.textContent = convertKelvinToCelsius(temp))
    ELEMENTS_UI.WEATHER_FEELS_TEMPER.textContent = convertKelvinToCelsius(feels_like)
    ELEMENTS_UI.WEATHER_CLOUDY.textContent = description
    ELEMENTS_UI.WEATHER_PICTURE.src = `https://openweathermap.org/img/wn/${icon}@4x.png`
    ELEMENTS_UI.WEATHER_PICTURE.style.display = 'block'
    
    ELEMENTS_UI.WEATHER_SUNRISE.textContent = convertTimestampToDate(sunrise, timezone)
    ELEMENTS_UI.WEATHER_SUNSET.textContent = convertTimestampToDate(sunset, timezone)
    
    if (storage.listOfFavoriteCities.includes(ELEMENTS_UI.CITY_NAME_NOW.textContent)) {
        ELEMENTS_UI.FAVORITE_BUTTON.classList.add('checked')
    } else {
        ELEMENTS_UI.FAVORITE_BUTTON.classList.remove('checked')
    }
    
    storage.currentCity = cityName
    storage.saveCurrentCityInStorage(storage.currentCity) // currentCity ==>> storage
    
}

function RenderForFavoriteList() {
    
    storage.getFavoriteCitiesFromStorage() // storage ==>>  LIST 
    
    if (storage.listOfFavoriteCities === null) {
        storage.listOfFavoriteCities = []
    }
    
    ELEMENTS_UI.FAVORITE_LIST.textContent = ''
    
    if (storage.listOfFavoriteCities) {
        
        storage.listOfFavoriteCities.forEach((item) => {
            
            let cityItem = document.createElement('div')
            cityItem.className = 'list-item'
            
            let cityItemName = document.createElement('div')
            cityItemName.className = 'list-item_name'
            cityItemName.textContent = item
            cityItemName.addEventListener('click', () => getResult(event.target.textContent))
            
            let cityItemBtn = document.createElement('div')
            cityItemBtn.className = 'list-item_btn'
            cityItemBtn.innerHTML = '&#9587'
            cityItemBtn.addEventListener('click', deleteButtonOnEachItem)
            
            cityItem.prepend(cityItemBtn)
            cityItem.prepend(cityItemName)
            
            ELEMENTS_UI.FAVORITE_LIST.prepend(cityItem)
        })
    }
}

function deleteButtonOnEachItem() {
    
    const cityName = event.target.previousElementSibling.textContent
    
    storage.listOfFavoriteCities = storage.listOfFavoriteCities.filter(item => item !== cityName)
    
    storage.saveFavoriteCitiesInStorage(storage.listOfFavoriteCities) //  LIST ==>> storage
    
    if (cityName === ELEMENTS_UI.CITY_NAME_NOW.textContent) {
        ELEMENTS_UI.FAVORITE_BUTTON.classList.remove('checked')
    }
    
    RenderForFavoriteList()
}

// translateWeather

// const serverUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast'
// const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}&lang=ru`;
// let response2 = fetch(urlForecast)
// response2
// .then(response2 => {
//     if (response2.ok) {
//         return response2.json()
//     } else {
//         return errorStatus = response2.status
//     }  
// })
// .then((data) => {
//     // showResult(data)
//     console.log(data)
//     // ELEMENTS_UI.SYSTEM_MESSAGE_BLOCK.style.display = 'none'
// })