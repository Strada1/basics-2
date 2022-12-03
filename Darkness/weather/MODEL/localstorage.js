export const Storage = {
  locations: localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [],
  city: localStorage.getItem("current-city")
    ? localStorage.getItem("current-city")
    : "Aktobe",
  tabs: localStorage.getItem("tabs") ? localStorage.getItem("tabs") : "now",
  language: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
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
  get tab() {
    return this.tabs;
  },
  set tab(tab) {
    this.tabs = tab;
    localStorage.setItem("tabs", tab);
  },
  get lang() {
    return this.language;
  },
  set lang(mylang) {
    this.language = mylang;
    localStorage.setItem("lang", mylang);
  },
};
