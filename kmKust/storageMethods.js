export const storage = {
	saveFavoriteCities(jsonParseLs) {
		localStorage.setItem('favoriteCities', JSON.stringify(jsonParseLs));
	},

	saveCurrentCity(cityDivText) {
		localStorage.setItem('currentCity', cityDivText);
	},

	saveCurrentTab(clickCurrentTab) {
		let currentTabs = clickCurrentTab.textContent;
		localStorage.setItem('currentTabs', currentTabs);
	},

	getCurrentCity() {
		let cityName = localStorage.getItem('currentCity');
		return cityName
	},

	getFavoriteCities() {
		let getLocalStorage = localStorage.getItem('favoriteCities')
		let jsonParseLs = JSON.parse(getLocalStorage);
		return jsonParseLs;
	},

	getCurrentTab() {
		let currentTab = localStorage.getItem('currentTabs');
		return currentTab;
	}
}
