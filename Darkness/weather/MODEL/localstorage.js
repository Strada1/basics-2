export const Storage = {
  locations: localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [],
  city: localStorage.getItem("current-city")
    ? localStorage.getItem("current-city")
    : "Aktobe",

  get favoriteCities() {
    return this.locations;
  },
  set favoriteCities(locs) {
    localStorage.setItem("cities", JSON.stringify(locs));
    this.locations = JSON.parse(localStorage.getItem("cities"));
  },
  get currentCity() {
    return this.city;
  },
  set currentCity(city) {
    localStorage.setItem("current-city", city);
    this.city = localStorage.getItem("current-city");
  },
};
