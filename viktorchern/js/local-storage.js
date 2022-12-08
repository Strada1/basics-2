// storage.saveFavoriteCities(favoriteCities)
// const favoriteCities = storage.getFavoriteCities();
// const currentCity = storage.getCurrentCity();

export const storage = {

  getFavoriteCities: () => {
    // const STORAGE_FAVORITE_CITIES = localStorage.getItem('favoriteCities');
    // return JSON.parse(STORAGE_FAVORITE_CITIES);
  },
  setFavoriteCities: (arr) => {
    // const STORAGE_FAVORITE_CITIES = JSON.parse(arr);
    // return localStorage.setItem('favoriteCities', arr);
  },

  getCurrentCity: () => localStorage.getItem('currentCity'),
  setCurrentCity: currentCity => localStorage.setItem('currentCity', currentCity),
};