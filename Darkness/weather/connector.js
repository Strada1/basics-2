import { render, cityRender } from "./VIEW/render.js";
import { getCityInfo } from "./MODEL/getcity.js";
import { searchCityForm } from "./CONTROLLER/searchform.js";
import { cities } from "./MODEL/locations.js";
searchCityForm();
render(getCityInfo(cities.currentCity));

cityRender(cities.favoriteCities);
