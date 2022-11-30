export let locations = localStorage.getItem("cities")
  ? JSON.parse(localStorage.getItem("cities"))
  : [];
export const addLocation = (city) => {
  if (locations.length < 6) {
    locations = [city, ...locations.filter((loc) => loc !== city)];
    localStorage.setItem("cities", JSON.stringify(locations));
  } else {
    locations = [
      city,
      ...locations.filter((loc, index) => !(index === 5) && loc !== city),
    ];
    localStorage.setItem("cities", JSON.stringify(locations));
  }
};

export const removeLocation = (city) => {
  locations = locations.filter((loc) => !(loc === city));
  localStorage.setItem("cities", JSON.stringify(locations));
};
