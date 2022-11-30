import { render, cityRender } from "./VIEW/render.js";
import { getCityInfo } from "./MODEL/getcity.js";
import { searchCityForm } from "./CONTROLLER/searchform.js";
searchCityForm();
render(getCityInfo("Aktobe"));
if (localStorage.getItem("cities")) {
  cityRender(JSON.parse(localStorage.getItem("cities")));
}
