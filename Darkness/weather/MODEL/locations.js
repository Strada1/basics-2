import { Storage } from "./localstorage.js";
export const cities = Storage;

export const addLocation = (city) => {
  let locs = cities.favoriteCities;
  if (locs.length < 6) {
    locs = [city, ...locs.filter((loc) => loc !== city)];
    cities.favoriteCities = locs;
  } else {
    locs = [
      city,
      ...locs.filter((loc, index) => !(index === 5) && loc !== city),
    ];
    cities.favoriteCities = locs;
  }
};

export const removeLocation = (city) => {
  let locs = cities.favoriteCities;
  locs = locs.filter((loc) => !(loc === city));
  cities.favoriteCities = locs;
};
