function openItem(itemName, btn) {
  let tabcontent = document.querySelectorAll(".tabcontent");
  for (let tab of tabcontent) {
    if (tab.id !== itemName) {
      tab.style.display = "none";
    }
  }

  let tablinks = document.querySelectorAll(".tablinks");
  for (let tablink of tablinks) {
    tablink.className = tablink.className.replace(" active", "");
  }

  document.querySelector(`#${itemName}`).style.display = "block";
  btn.className += " active";
}

let btnTabs = document.querySelectorAll(".tablinks");
for (let btn of btnTabs) {
  let btnValue = btn.getAttribute("value");
  btn.addEventListener("click", () => openItem(btnValue, btn));
}

const UI_ELEMENTS = {
  FORM: document.querySelector(".weather__form"),
  INPUT_FORM: document.querySelector(".form__input"),
  CURRENT_TEMP: document.querySelector(".header__temperature"),
  CURRENT_CITY: document.querySelector(".current-city__name"),
  WEATHER_MOOD: document.querySelector(".icon"),
  LIKE_CITY: document.querySelector(".current-city__btn-like"),
  ADDED_CITIES: document.querySelector(".list__favorite-cities"),
};

function getCity() {
  const cityName = UI_ELEMENTS.INPUT_FORM.value;
  const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
  return url;
}

UI_ELEMENTS.FORM.addEventListener("submit", (event) => {
  let currentWeather;
  fetch(getCity())
    .then((response) => response.json())
    .then((data) => (currentWeather = data))
    .then(() =>
      changeNowContent(
        currentWeather.name,
        convertToCelsius(currentWeather.main.temp),
        currentWeather.weather[0].icon
      )
    )

    .catch((error) => alert(error));
  event.preventDefault();
});

function convertToCelsius(value) {
  return Math.floor(value - 273.15);
}

function changeNowContent(cityName, cityTemp, id) {
  UI_ELEMENTS.CURRENT_CITY.textContent = cityName;
  UI_ELEMENTS.CURRENT_TEMP.textContent = `${cityTemp}°`;
  UI_ELEMENTS.WEATHER_MOOD.src = createIconLink(id);
}

function createIconLink(iconId) {
  const serverUrl = "http://openweathermap.org/img/wn/";
  const url = `${serverUrl}${iconId}@4x.png`;
  return url;
}

function addCityToDom(cityName) {
  let addedCity = document.createElement("li");
  addedCity.className = "added_city";
  addedCity.textContent = cityName;
  UI_ELEMENTS.ADDED_CITIES.append(addedCity);
  let removeCity = document.createElement("span");
  removeCity.className = "added_city-remove";
  removeCity.textContent = "+";
  addedCity.appendChild(removeCity);

  removeCity.addEventListener("click", () => {
    addedCity.remove();
  });
}

UI_ELEMENTS.LIKE_CITY.addEventListener("click", (event) => {
  let city;
  fetch(getCity())
    .then((res) => res.json())
    .then((data) => (city = data))
    .then(() => addCityToDom(city.name));

  event.preventDefault();
});
