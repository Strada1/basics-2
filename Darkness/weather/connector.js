import { render, cityRender } from "./VIEW/render.js";
import { getCityInfo } from "./MODEL/getcity.js";
import { searchCityForm } from "./CONTROLLER/searchform.js";
import { cities } from "./MODEL/locations.js";
import { langSwitcher } from "./VIEW/lang.js";
langSwitcher();
searchCityForm();
render(getCityInfo(cities.currentCity, cities.lang));
cityRender(cities.favoriteCities);
