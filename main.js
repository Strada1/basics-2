import {storage} from './module.js';

// tabs
const weatherBattons = document.querySelector('.weather__buttons');
const weatherBattonAll = Array.from( document.querySelectorAll('.weather__button'));
const weatherTabs = document.querySelector('.weather__tabs')
const weatherTabAll = document.querySelectorAll('.weather__tab')
weatherBattons.addEventListener("click", function (event) {
	const clickButton = event.target
	if (checkClickTabs(clickButton)){
		changeTabs(clickButton)
	}
});

function checkClickTabs(clickButton) {
	const clickButtonParent = clickButton.closest(".weather__button")
	const activeClickElementParent = clickButtonParent.classList.contains("-active")
	return clickButtonParent && !activeClickElementParent
}


function changeTabs(clickButton) {
	const activeButton = weatherBattons.querySelector('.weather__button.-active');
	activeButton.classList.remove("-active")
	clickButton.classList.add("-active")
	const indexClickButton = weatherBattonAll.findIndex(item => item === clickButton)
	const activeTab = weatherTabs.querySelector('.weather__tab.-active');
	activeTab.classList.remove("-active")
	const newActiveTab = weatherTabAll[indexClickButton]
	newActiveTab.classList.add("-active")
}


/*
Ваша задача:
1. вводим что-то в строку поиска, по нажатию на Enter - берем имя города из этой строки
2. подставляем это имя в url через шаблонные строки и делаем запрос на сервер
3. результат записываем в любую переменную и выводим нужную информацию в табе 'Now' согластно верстке
Все вместе: получить имя города из поля ввода, сделать fetch по нужному урлу, изменить содержимое пары полей в верстке. Согласитесь просто?
4. Добавить обработку ошибок
5. Добавим возможность добавлять города, чтобы не вписывать их вручную в строку поиска каждый раз. 
6. По клику на иконку с сердцем добавляйте города в список справа, по клику на крестик рядом с именем города в этом списке - удаляйте его навсегда 
7. По клику на сам город - добавляйте его данные в окно 'Now'
*/
const UI_ELEMENTS = {
	FORM: document.querySelector('.weather__form'),
	INPUT: document.querySelector('.weather__input'),
	SEARCH: document.querySelector('.weather__submit'),
	FAVORITES_CITIES_LIST: document.querySelector('.weather__cities'),
	CURRENT__CITIES: document.querySelectorAll('.-city'),
	NOW_CITY: document.querySelector('.now__city'),
	LIKE_BUTTON: document.querySelector('.now__like'),
	ICON__WEATHER: document.querySelector('.now__img'),
}

const WEATHER_DETAILS = {
	CITY: document.querySelector('.details__city'),
	TEMPERATURE: document.querySelector('.details__temperature'),
	FEELS__LIKE: document.querySelector('.details__feels-like'),
	WEATHER: document.querySelector('.details__weather'),
	SUNRISE: document.querySelector('.details__sunrise'),
	SUNSET: document.querySelector('.details__sunset'),
}

let citiesList = storage.getFavoriteCities();
render();

UI_ELEMENTS.LIKE_BUTTON.addEventListener('click', addCity);

UI_ELEMENTS.FORM.addEventListener('submit', function (event) {
    event.preventDefault();
	let newCity = UI_ELEMENTS.INPUT.value
    sendRequest(newCity);
	event.target.reset();
});

function addCity(e) {
	e.preventDefault();

	const currenCity = UI_ELEMENTS.NOW_CITY.textContent;
	console.log(currenCity);

	if (citiesList.length > 0) {
		if (citiesList.includes(currenCity)) {
			
			deleteFavoriteCity(currenCity);
			//alert('This city is already at list');
		} else {
			citiesList.push(currenCity);
			console.log(citiesList);
			storage.saveFavoriteCities(citiesList);
		}
	} else if (citiesList.length === 0) {
		citiesList.push(currenCity);
		console.log(citiesList);
		storage.saveFavoriteCities(citiesList);
	}

	render();	
}
function deleteFavoriteCity(currenCity) {
	citiesList = citiesList.filter((city) => {
		return city !== currenCity;				
	});
	storage.saveFavoriteCities(citiesList);
	render();
}


//функция удаления, 
function deleteCity() {
	
	citiesList = citiesList.filter((cityName) => {
		let currenCity = this.parentNode.textContent;
		return cityName !== currenCity;
	})
	storage.saveFavoriteCities(citiesList);
	render();
}


//функция добавления в ui
function render(){
	let favoritesCitiesList = UI_ELEMENTS.FAVORITES_CITIES_LIST;
	favoritesCitiesList.textContent = '';

	citiesList = storage.getFavoriteCities();
	 
	if (citiesList.length > 0) {
		citiesList.forEach((city) => {
			favoritesCitiesList.append(createNewListNode(city));
		})
	}
	console.log(citiesList);
}

function replace(currenCity) {
	let cities = UI_ELEMENTS.CURRENT__CITIES;
	for (let city of cities) {
		city.textContent = currenCity;
	}
	storage.addLastCityName(currenCity);
}

function openFavoritCity(e) {
	let currenCity = e.target;
	console.log(currenCity.textContent);

	if(currenCity) {
		sendRequest(currenCity.textContent);
	}
	UI_ELEMENTS.INPUT.placeholder = currenCity.textContent;
}

function createNewListNode(city) {
    let newFavoritCity = document.createElement('li');
	newFavoritCity.classList.add('weather__city');
	newFavoritCity.innerHTML = city;

	const deleteIcon = document.createElement('span');
	deleteIcon.classList.add('weather__delete-city');
	deleteIcon.addEventListener('click', deleteCity);

	newFavoritCity.append(deleteIcon);
	newFavoritCity.addEventListener('click', openFavoritCity);
	
    return newFavoritCity
}

function sendRequest(text) {
	let cityName = text;
	const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
	const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
	// (этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате)
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

	fetch(url)
			.then(response => response.json())
			.then(data => {
				if (data.cod < 300) {
					replace(data.name);
					console.log(data);
					storage.getLastCityName();
					storage.addLastCityName(data.name);
					changeDetails(data);
					getIconWeather(data);
				}
				
			})
			.catch(error => alert(`Error!: ${error.message}`));
}


function changeDetails(data) {
	WEATHER_DETAILS.TEMPERATURE.textContent = data.main.temp.toFixed(0);
	WEATHER_DETAILS.FEELS__LIKE.textContent = data.main.feels_like.toFixed(0);
	WEATHER_DETAILS.WEATHER.textContent = data.weather[0].main;
	WEATHER_DETAILS.SUNRISE.textContent = getTime(1000 * data.sys.sunrise);
	WEATHER_DETAILS.SUNSET.textContent = getTime(1000 * data.sys.sunset);
}

function getTime(data) {
	let time = new Date(data);
	let hours = time.getHours();
	let minutes = time.getMinutes();
	if (hours < 10) {
		hours = `0${(hours)}`;
	}
	if (minutes < 10) {
		minutes = `0${(minutes)}`;
	}
	
	return `${hours}:${minutes}`
}

function getIconWeather(data) {
	const icon = data.weather[0].icon;
	const apiIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;
	UI_ELEMENTS.ICON__WEATHER.src = apiIcon;
    
}
/* object after fetch request
base: "stations"
clouds: {all: 9}
cod: 200
coord: {lon: 50, lat: 53}
dt: 1669997227
id: 499068
main: {feels_like: 254.43, grnd_level: 1033, humidity: 92,
		pressure: 1048, sea_level: 1048, temp: 261.32,
		temp_max: 261.32, temp_min: 261.32}
name: "Samara Oblast"
sys: {country: 'RU', sunrise: 1669955499, sunset: 1669984040}
timezone: 14400
visibility: 10000
weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}]
wind: {speed: 3.9, deg: 77, gust: 8.01}

*/