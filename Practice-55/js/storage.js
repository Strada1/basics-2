import { locationList } from "./UI.js";

export let storage = {
    saveFavoriteCities(favoriteCities) {
        localStorage.setItem('Cities', JSON.stringify(favoriteCities));
    },

    saveCurentTown(town) {
        localStorage.setItem('favoriteTown', town)
    },

    getFavoriteCities() {
        return JSON.parse(localStorage.getItem('Cities'))
    },

    getCurentTown() {
        return localStorage.getItem('favoriteTown')
    },
}

