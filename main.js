const SERVER = {
	URL: 'http://api.openweathermap.org/data/2.5/weather',
	API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
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


	showTemperature(needCity.value)

})


function showTemperature(cityName) {
	fetch(`${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}`)
		.then((response) => response.json())
		.then(function (response) {

			//let temp = response.main.temp
			let tempInCelsius = conversionToCelsius(response.main.temp)
			document.querySelector('.now__temperature').textContent = tempInCelsius.toFixed(1) + '℃'
			console.log(response.name)

			document.querySelector('.now__city').textContent = response.name;
			heart(response.name)
		})
		.catch((error) => {
			if (error) {
				alert('Ошибка')
			}

		});

}

function conversionToCelsius(tempInKelvins) {
	return (tempInKelvins - 273);
}

function heart(cityName) {
	let heart = document.querySelector('.now__like')
	heart.addEventListener('click', () => {
		addInArray(cityName)
		// render()
	})
}

let cityList = [];
//let cityList = ['Samara', 'Moscow', 'Kazan'];


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
render()

function addCityInHTML(cityName) {
	let ul = document.querySelector('.weather__cities')
	let li = document.createElement('li');
	li.classList.add('weather__city')
	ul.prepend(li)

	let city = document.createElement('p')
	city.textContent = cityName
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
	render();
}