export let storage = {
	saveCity: "saveCity",
	lastCity: "lastCity",
	alterternateCity: "Санкт-Петербург",
	updateSaveCityLocal: function (city) {
		let jsonSaveCity = JSON.stringify(city)
		localStorage.setItem(this.saveCity, jsonSaveCity)
	},
	recordLastCity: function (city) {
		localStorage.setItem(this.lastCity, city)
	},
	getLastCityLocal: function () {
		return localStorage.getItem(this.lastCity)
	},
	getSaveCitiesLocal: function () {
		return localStorage.getItem(this.saveCity)
	}
};