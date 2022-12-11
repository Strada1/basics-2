import { storage } from './storageMethods.js';
import {
	changeDivNow,
	changeDivDetails,
	listIncludesСity,
	changeColorHeart,
	displayAddedLocations,
	checkTime
} from './changeUI.js';

import {
	CURRENT_TAB,
	BTN_SAVE_CITY,
	SEARCH__INPUT,
	FORM,
	UL_CITIES,
	CITY_DIV,
	CELSIUS_DIV,
	IMG_WEATHER,
} from './view.js';

const CURRENT_TAB_TEXT = {
	NOW: 'Now',
	DETAILS: 'Details',
	FORECAST: 'Forecast'
}

!(function chooseTab() {
	let currentTab = storage.getCurrentTab();
	let [tab1, tab2, tab3] = document.querySelectorAll('.tabs__item');

	switch (currentTab) {
		case CURRENT_TAB_TEXT.NOW:
			tab1.click();
			return;

		case CURRENT_TAB_TEXT.DETAILS:
			tab2.click();
			return;

		case CURRENT_TAB_TEXT.FORECAST:
			tab3.click();
			return;
	}
})()

!(function setCurrentCityUI() {
	let cityName = storage.getCurrentCity();
	cityDataSearch(cityName);
})()

function cityDataSearch(cityName) {
	const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
	const apiKey = "3bfb7384f048b8e78896a10d694dd618";
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

	fetch(url)
		.then(response => response.json())
		.then(data => CityData(data))
		.catch(error => alert(`Неизвестная ошибка ${error}`))
}

const CityData = (data) => {
	console.log(data)

	let cityName = data.name;
	let degreesCelsius = Math.round(data.main.temp - 273, 15) + "°";
	let imgLocation = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
	let feelsLike = Math.round(data.main.feels_like - 273, 15) + "°";
	let weatherData = (data.weather[0].main);

	let sunriseDate = new Date(data.sys.sunrise * 1000);
	let getHoursSunrise = sunriseDate.getHours();
	let getMinutesSunrise = sunriseDate.getMinutes();
	let timeSunrise = checkTime(getHoursSunrise, getMinutesSunrise);

	let sunsetDate = (new Date(data.sys.sunset * 1000));
	let getHoursSunset = sunsetDate.getHours();
	let getMinutesSunset = sunsetDate.getMinutes();
	let timeSunset = checkTime(getHoursSunset, getMinutesSunset);

	changeDivNow(cityName, degreesCelsius, imgLocation);
	changeDivDetails(cityName,
		degreesCelsius,
		feelsLike,
		weatherData,
		timeSunrise,
		timeSunset);
	render()
}

function render() {
	UL_CITIES.replaceChildren();

	let cityDivText = CITY_DIV.textContent;
	let jsonParseLs = storage.getFavoriteCities();

	for (let key of jsonParseLs) {
		let city = key;
		displayAddedLocations(city);
	}

	storage.saveCurrentCity(cityDivText);
	changeColorHeart();
}

function changLocalStorage() {
	let cityDivText = CITY_DIV.textContent;
	let jsonParseLs = storage.getFavoriteCities();
	let cityInArray = listIncludesСity(jsonParseLs, cityDivText);

	if (cityInArray) {
		jsonParseLs = jsonParseLs.filter(item => item !== cityDivText);
	} else if (!cityInArray) {
		jsonParseLs.push(cityDivText);
	}

	storage.saveFavoriteCities(jsonParseLs);
}

BTN_SAVE_CITY.addEventListener('click', () => {
	changLocalStorage();
	render();
})

FORM.addEventListener('submit', event => {
	event.preventDefault();
	let cityName = SEARCH__INPUT.value;
	cityDataSearch(cityName);
	render();
	event.target.reset();
});

UL_CITIES.addEventListener('click', event => {
	let clickCity = event.target.closest('.liCity');
	let cityName = clickCity.textContent;

	if (clickCity) {
		cityDataSearch(cityName);
	}
})

CURRENT_TAB.addEventListener('click', event => {
	let clickCurrentTab = event.target.closest('.tabs__item');
	storage.saveCurrentTab(clickCurrentTab);
})

//localStorage.clear('listStoraje')
//localStorage.setItem('favoriteCities', JSON.stringify([]))

render()
