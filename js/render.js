import { UI_ELEMENT } from "./constants.js";
import { storage } from "./storage.js";
import { createWeatherCity } from "./weather.js";
import {
  createTabNow,
  createTabDetails,
  createTabForecast,
} from "./createTabs.js";

const render = {
  cityName: "",
  weatherNow: {},
  weatherForecast: [],
  activeTab: "Now",
  changeActiveTab: function (button) {
    if (button.classList.contains("-active")) return;

    const activeButton = button.closest(".tablinks").querySelector(".-active");
    activeButton.classList.remove("-active");
    this.activeTab = button.dataset.tab;
    button.classList.add("-active");
    this.renderInfoWindow();
  },
  renderInfoWindow: function () {
    UI_ELEMENT.INFO_WINDOW.replaceChildren();
    let tab;

    if (this.activeTab === "Now") {
      tab = createTabNow(this.weatherNow);
    }
    if (this.activeTab === "Details") {
      tab = createTabDetails(this.weatherNow);
    }
    if (this.activeTab === "Forecast") {
      tab = createTabForecast(this.cityName, this.weatherForecast);
    }

    UI_ELEMENT.INFO_WINDOW.append(tab);
  },
  renderListCity: function () {
    UI_ELEMENT.FAVOURITES.replaceChildren();
    let cities = storage.getCities();
    cities.forEach((item) => UI_ELEMENT.FAVOURITES.prepend(createCity(item)));
  },
  renderAllInfo: function () {
    createWeatherCity(storage.getLastCity());
    this.renderListCity();
  },
  showError: function (message) {
    let messageContainer = document.body.querySelector(".main__error");
    let textError = document.createElement("div");
    textError.className = "main__text-error";
    textError.textContent = message;
    messageContainer.append(textError);
    document.body.querySelector(".main").append(messageContainer);
    setTimeout(() => (messageContainer.textContent = ""), 2000);
  },
};

function createCity(cityName) {
  let city = document.createElement("li");
  city.className = "favourites__city";
  city.textContent = cityName;

  let remove = document.createElement("div");
  remove.className = "favourites__remove";

  city.append(remove);
  return city;
}
export { render };
