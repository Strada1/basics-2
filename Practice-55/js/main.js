
import { locationList } from "./UI.js";
// import { aa } from "./variables.js";




export function removeLocationListItem(town) {
    return locationList.filter(item => item !== town);
}

export function chekCityRepeat(town) {
    town = town[0].toUpperCase() + town.slice(1);
    return locationList.includes(town);
}