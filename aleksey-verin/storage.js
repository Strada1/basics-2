export const storage = {
    currentCity: '',
    listOfFavoriteCities: [],

    saveFavoriteCitiesInStorage(listOfFavoriteCities) {
        return localStorage.setItem('favoriteCities', JSON.stringify(listOfFavoriteCities))
    },
    getFavoriteCitiesFromStorage() {
        return this.listOfFavoriteCities = JSON.parse(localStorage.getItem('favoriteCities'))
    },

    saveCurrentCityInStorage(currentCity) {
        return localStorage.setItem('currentCity', JSON.stringify(currentCity))
    },
    getCurrentCityFromStorage() {
        this.currentCity = JSON.parse(localStorage.getItem('currentCity'))
        if (!this.currentCity) {
            this.currentCity = 'Ижевск'
        }
    }
}