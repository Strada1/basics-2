const SERVER = {
	URL: 'https://api.openweathermap.org/data/2.5/weather',
	API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
}

const DETAILS = {
	CITY: document.querySelector('.details__city'),
	TEMPERATURE: document.querySelector('.details__temperature'),
	FEELS: document.querySelector('.details__feels-like'),
	WEATHER: document.querySelector('.details__weather'),
	SUNRISE: document.querySelector('.details__sunrise'),
	SUNSET: document.querySelector('.details__sunset'),
}


const weatherBattons = document.querySelector('.weather__buttons');
const weatherBattonAll = Array.from(document.querySelectorAll('.weather__button'));
const weatherTabs = document.querySelector('.weather__tabs')
const weatherTabAll = document.querySelectorAll('.weather__tab')
weatherBattons.addEventListener("click", function (event) {
	const clickButton = event.target
	if (checkClickTabs(clickButton)) {
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



const needCity = document.querySelector('.weather__input');


let form = document.querySelector('.weather__form')
form.addEventListener('submit', (event) => {
	event.preventDefault();


	getRequest(needCity.value)


})

function getRequest(cityName) {
	fetch(`${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}`)
		.then((response) => response.json())
		.then(function (response) {
			console.log(response)
			showTemperature(response)
			showDetails(response)
		})
}
function showTemperature(response) {
	//let temp = response.main.temp
	let tempInCelsius = conversionToCelsius(response.main.temp)
	document.querySelector('.now__temperature').textContent = tempInCelsius.toFixed(1) + '℃'

	document.querySelector('.now__city').textContent = response.name;


}
function showTemperatureAgain(cityName) {
	fetch(`${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}`)
		.then((response) => response.json())
		.then(function (response) {
			showDetails(response)
			//let temp = response.main.temp
			let tempInCelsius = conversionToCelsius(response.main.temp)
			document.querySelector('.now__temperature').textContent = tempInCelsius.toFixed(1) + '℃'

			document.querySelector('.now__city').textContent = cityName;
		})


}

function showDetails(response) {
	DETAILS.CITY.textContent = response.name;
	DETAILS.TEMPERATURE.textContent = conversionToCelsius(response.main.temp).toFixed(1);
	DETAILS.FEELS.textContent = conversionToCelsius(response.main.feels_like).toFixed(1);
	DETAILS.WEATHER.textContent = response.weather[0].main;
	DETAILS.SUNRISE.textContent = timeConverter(response.sys.sunrise);
	DETAILS.SUNSET.textContent = timeConverter(response.sys.sunset);

}
function timeConverter(UNIX_timestamp) {
	let a = new Date(UNIX_timestamp * 1000);
	let hour = a.getHours();
	let min = a.getMinutes();
	let time = hour + ':' + min + '';
	return time;
}
function conversionToCelsius(tempInKelvins) {
	return (tempInKelvins - 273);
}
let cityList = []
console.log(cityList)

if (localStorage.getItem('cities')) {
	cityList = JSON.parse(localStorage.getItem('cities'));
	render();
}

let heart = document.querySelector('.now__like')
heart.addEventListener('click', () => {
	likeCity()
	localStorage.setItem('cities', JSON.stringify(cityList))
})

function likeCity() {

	let nowCity = document.querySelector('.now__city')
	const currentCity = nowCity.textContent
	addInArray(currentCity)

	render()
}

//localStorage.setItem('cities', JSON.stringify(cityList))

function addInArray(cityName) {
	if (!cityList.find(city => city.name == cityName)) {
		cityList.push({ name: cityName })
	}
	render()
}

function render() {
	let li = document.querySelectorAll('.weather__city')
	li.forEach((element) => {
		element.remove();
	});

	for (let city of cityList) {
		addCityInHTML(city.name)
	}
}
/* render()
 */
function addCityInHTML(cityName) {
	let ul = document.querySelector('.weather__cities')
	let li = document.createElement('li');
	li.classList.add('weather__city')
	ul.prepend(li)

	let city = document.createElement('p')
	city.textContent = cityName
	city.addEventListener('click', () => {
		showAgain(cityName);
	})
	li.prepend(city);


	let cross = document.createElement('button')
	cross.classList.add('weather__delete-city')
	cross.textContent = '+'
	cross.addEventListener('click', () => {
		deleteCity(cityName)
	})
	li.append(cross);

}

function deleteCity(cityName) {
	console.log('asdafas')
	cityList = cityList.filter(city => city.name !== cityName);
	console.log(cityList)
	localStorage.setItem('cities', JSON.stringify(cityList))


	render();
}

function showAgain(cityName) {


	console.log('qqqqqqqq')
	showTemperatureAgain(cityName)
	render();
}


