export function saveFavoriteCities(array) {
  const list = JSON.stringify(array);
  localStorage.setItem("FavoriteCities", list);
}

export function saveCurrentCity(cityName) {
  localStorage.setItem("CurrentCity", cityName);
}

export function getFavoriteCities() {
  const savedList = localStorage.getItem("FavoriteCities");
  const savedArray = JSON.parse(savedList);
  return savedArray;
}

export function getCurrentCity() {
  return localStorage.getItem("CurrentCity");
}
