import { search } from "./handlers.js";
export const searchCityForm = () => {
  const searchForm = document.querySelector(".main__city-search");
  searchForm.addEventListener("submit", search);
};
