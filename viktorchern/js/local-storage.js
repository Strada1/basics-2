export const storage = {
  getCurrentCity: () => localStorage.getItem('currentCity'),
  setCurrentCity: currentCity => localStorage.setItem('currentCity', currentCity),

  getFavoriteCities: () => {
    const STORAGE_FAVORITE_CITIES = localStorage.getItem('favoriteCities');
    return JSON.parse(STORAGE_FAVORITE_CITIES);
  },
  setFavoriteCities: (arr) => {
    const STORAGE_FAVORITE_CITIES = JSON.stringify(arr);
    localStorage.setItem('favoriteCities', STORAGE_FAVORITE_CITIES);
  },
};