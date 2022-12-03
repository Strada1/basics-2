export function addStorageCurrentCity(cityName) {
  localStorage.setItem('currentCity', cityName)
}

export function getStorageCurrentCity() {
  return localStorage.getItem('currentCity')
}

export function addStorageFavoriteCities(array) {
  const json = JSON.stringify(array)
  localStorage.setItem('favoriteCities', json);

}

export function getStorageFavoriteCities() {
  const json = localStorage.getItem('favoriteCities');
  const array = JSON.parse(json);
  return array;
}
