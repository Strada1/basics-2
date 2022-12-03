import { favoriteBtn, tabsBtn, nowCityName, nowCityTemp, nowCityImg } from "./module.js";
import { detailsCityName, detailsTemp, detailsFeels, detailsWeather, detailsSunnrise, detailsSunset } from "./module.js";

tabsBtn.addEventListener("click", (event) => {
    const currentBtn = event.target;
    const tabId = currentBtn.getAttribute("data-tab");
    const currentTab = document.querySelector(tabId);
    const activeTab = document.querySelectorAll(".active")

    activeTab.forEach(function (item) {
        item.classList.remove("active")
    })
    currentBtn.classList.add("active");
    currentTab.classList.add("active");
})
document.querySelector(".weather-tab").click();

const form = document.querySelector(".search-form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target.querySelector("input").value;
    findCity(inputValue)
    event.target.reset();
})

function findCity(value) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => addInfo(data))
        .catch(error => alert(`Ошибка:${error}`))
}

function addInfo(value) {
    nowCityName.textContent = value.name;
    nowCityTemp.textContent = Math.round(value.main.temp) + "˚";
    nowCityImg.style.background =
        `url(http://openweathermap.org/img/wn/${value.weather[0].icon}@4x.png)`;

    detailsCityName.textContent = value.name;
    detailsTemp.textContent = "Temperature: " + Math.round(value.main.temp) + "˚";
    detailsFeels.textContent = "Feels like: " + Math.round(value.main.feels_like) + "˚";
    detailsWeather.textContent = "Weather: " + value.weather[0].main;
    const sunrise = new Date(1000 * value.sys.sunrise)
    const sunset = new Date(1000 * value.sys.sunset)
    detailsSunnrise.textContent = "Sunrise: " +
        sunrise.getHours() + ":" + sunrise.getMinutes();
    detailsSunset.textContent = "Sunset: " +
        sunset.getHours() + ":" + sunset.getMinutes();

    localStorage.setItem("last", nowCityName.textContent)
}

let cityList = [];
showAtStart()

function showAtStart() {
    if ((JSON.parse(localStorage.getItem("city"))) !== null) {
        render()
    }
    let last = localStorage.getItem("last")
    if (last !== null) {
        findCity(last)
    }
}

favoriteBtn.addEventListener("click", () => {
    if (!cityList.find(item => item.name === nowCityName.textContent)) {
        cityList.push({ name: nowCityName.textContent })
        SaveToStorage()
    }
    render()
})

function deleteCity(event) {
    cityList = cityList.filter(item =>
        item.name !== event.target.previousElementSibling.textContent)
    SaveToStorage()
    render()
}

function render() {
    const locList = document.querySelectorAll(".location-list li")
    const storageCity = JSON.parse(localStorage.getItem("city"))
    locList.forEach(item => item.remove())

    cityList.splice(0, cityList.length)
    storageCity.forEach(elem => {
        cityList.push(elem)
        const place = document.querySelector(".location-list")
        const newLi = document.createElement("li")
        const newDiv = document.createElement("div")
        const newBnt = document.createElement("button")
        newBnt.textContent = "+"

        newBnt.addEventListener("click", (event) => deleteCity(event))
        newDiv.textContent = elem.name
        newLi.append(newDiv, newBnt)

        newDiv.addEventListener("click", (event) => {
            let clickCity = storageCity.find(item =>
                item.name === event.target.textContent)
            findCity(clickCity.name);
        });
        place.prepend(newLi)
    })
}

function SaveToStorage() {
    localStorage.setItem("city", JSON.stringify(cityList))
}
