// Запросы
import { storage } from './storage.js'
import { findIndex, getMounth, getDate, zeroMake } from './help.js'
const serverUrlNow = 'http://api.openweathermap.org/data/2.5/weather';
const serverUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = '11560f623c0b7f481e38056a5753ce7e'
const weatherForm = document.querySelector(".weather__form")
const cityAll = document.querySelectorAll(".-city")
const tempAll = document.querySelectorAll(".-temperature")
const tempFeels = document.querySelector('.details__feels-like')
const weatherCities = document.querySelector('.weather__cities');
const weatherDescription = document.querySelector('.details__weather');
const nowPic = document.querySelector(".now__img")
const svgHeart = document.querySelector(".now__like svg")
const buttonHeart = document.querySelector(".now__like")
const detailsSunrise = document.querySelector('.details__sunrise');
const detailsSunset = document.querySelector('.details__sunset');
const forecastCards = document.querySelector(".forecast__cards")
// const findIndex = (cityName) => saveCity.findIndex(item => item.cityName === cityName)
export let saveCity = [];

if (storage.getLastCityLocal()) {
	weatherRequest(storage.getLastCityLocal())
} else {
	weatherRequest(storage.alterternateCity)
}

if (storage.getSaveCitiesLocal()){
	saveCity = JSON.parse(storage.getSaveCitiesLocal())
	showLikeCity()
} else {
	storage.updateSaveCityLocal(saveCity)
}

weatherForm.addEventListener("submit", cityFromForm)

buttonHeart.addEventListener("click", handlerHeart)

weatherCities.addEventListener("click", handlerCites)

function cityFromForm() {
	let cityName = weatherForm.querySelector(".weather__input").value
	weatherRequest(cityName)
	weatherForm.reset()
}

function handlerHeart(event) {
	let clickElement = event.target
	if (clickElement.closest(".now__like")){
		let cityName = document.querySelector('.now__city').textContent
		changeCityLike(cityName)
		showLikeCity()
	}
}

function handlerCites(event) {
	let clickElement = event.target
	if (clickElement.closest(".weather__city")){
		let cityName = clickElement.closest(".weather__city").textContent
		weatherRequest(cityName)
	}
}

function weatherRequest(cityName) {
	storage.recordLastCity(cityName)
	const url = `${serverUrlNow}?q=${cityName}&appid=${apiKey}&units=metric`;
	const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}&units=metric`;
	let promiseNow = fetch(url)
	promiseNow
	.then(res => res.json())
	.catch((err) =>{
		throw err
	})
	.then(res => takeInfoNow(res))
	.catch(() => console.log("Ошибка сервера"))
	let promisForecast = fetch(urlForecast)
	promisForecast
	.then(res => res.json())
	.catch((err) =>{
		throw err
	})
	.then(res => takeInfoFerecast(res))
	.catch(() => console.log("Ошибка сервера"))
}

function takeInfoNow(infoObj) {
	if (infoObj.cod > 299){
		return error()
	}
	let cityName = infoObj.name
	writeCity(cityName)
	changeTheHeart(cityName)
	writeTemp(infoObj.main)
	writeWeather(infoObj.weather[0])
	writeTime(infoObj.timezone, infoObj.sys)
}

function takeInfoFerecast(infoObj) {
	if (infoObj.cod > 299) {
		return error()
	}
	writeForcast(infoObj.list)
}

function error() {
	console.log("Город не найден")
}

function writeTemp(temps) {
	let temp = +temps.temp.toFixed(1)
	tempAll.forEach(element => {
		element.textContent = temp
	});
	let tempFeelsLike = +temps.feels_like.toFixed(1)
	tempFeels.textContent = tempFeelsLike
}

function writeWeather(weather) {
	let namePic = weather.icon
	nowPic.src = `img/${namePic}.png`
	nowPic.alt = weather.main
	weatherDescription.textContent = weather.description
}

function writeCity(cityName) {
	cityName = cityName[0].toUpperCase() + cityName.slice(1)
	cityAll.forEach(element => {
		element.textContent = cityName
	});
}

function writeTime(timezone, sys) {
	timezone = timezone / 3600
	detailsSunrise.textContent = makeTime(timezone, sys.sunrise)
	detailsSunset.textContent = makeTime(timezone, sys.sunset)
}

function makeTime(timezone, time) {
	let timeObj = getDate(time)
	timeObj.hour = timeObj.hour + timezone
	timeObj.hour = timeObj.hour > 24 ? timeObj.hour - 24 : timeObj.hour
	timeObj.hour = timeObj.hour < 0 ? timeObj.hour + 24 : timeObj.hour
	for (const key in timeObj) {
		timeObj[key] = zeroMake(timeObj[key])
	}
	let date = `${timeObj.hour}:${timeObj.minute}`
	return date
}



function writeForcast(list) {
	forecastCards.textContent = ""
	list.forEach(element => {
		forecastCards.append(writeCardForecast(element))
	});
}

function writeCardForecast(list) {
	let forecastCard = document.createElement("div");
	forecastCard.className = "forecast__card"

	let forecastDate = document.createElement("div");
	forecastDate.className = "forecast__date"
	forecastDate.textContent = takeDateForecast(true, list.dt)
	

	let forecastTime = document.createElement("div");
	forecastTime.className = "forecast__time"
	forecastTime.textContent = takeDateForecast(false, list.dt)

	let temp = (list.main.temp).toFixed(1)
	let forecastTemperature = document.createElement("div");
	forecastTemperature.className = "forecast__temperature"
	forecastTemperature.textContent = `Temperature: ${temp}°`

	let forecastConditions = document.createElement("div");
	forecastConditions.className = "forecast__conditions"
	forecastConditions.textContent = `${list.weather[0].description}`

	let feelTemp = (list.main.feels_like).toFixed(1)
	let forecastFeelsLike = document.createElement("div");
	forecastFeelsLike.className = "forecast__feels-like"
	forecastFeelsLike.textContent = `Feels like: ${feelTemp}°`

	let forecastPic = document.createElement("div");
	forecastPic.className = "forecast__pic"

	let forecastImg = document.createElement("img");
	forecastImg.src = `../img/${list.weather[0].icon}.png`
	forecastPic.append(forecastImg)

	forecastCard.append(forecastDate, forecastTime, forecastTemperature, forecastConditions, forecastFeelsLike, forecastPic)
	return forecastCard
}

function takeDateForecast(date, seconds) {
	let dateObj = new Date(seconds * 1000);
	if(date){
		let day = dateObj.getDate()
		let mounth = getMounth(dateObj.getMonth())
		date = `${day} ${mounth}`
		return date
	} else {
		let hour = dateObj.getUTCHours() > 9 ? dateObj.getUTCHours() : "0" + dateObj.getUTCHours()
		let time = `${hour}:00`
		return time
	}
	
}


function changeCityLike(cityName) {
	if (findIndex(cityName) > -1){
		saveCity = saveCity.filter(item => item.cityName !== cityName)
	} else {
		saveCity.push({cityName})
	}
	changeTheHeart(cityName)
	storage.updateSaveCityLocal(saveCity)
}

function changeTheHeart(cityName) {
	let value = findIndex(cityName) > -1 ? "black" : "none"
	svgHeart.setAttribute("fill", value)
}

function showLikeCity() {
	weatherCities.textContent = ""
	saveCity.forEach(element => {
		let cityName = element.cityName
		let li = document.createElement("li")
		li.className = "weather__city"
		li.textContent = cityName
		weatherCities.prepend(li)
	});
}


