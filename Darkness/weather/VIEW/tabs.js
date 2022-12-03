import { cities } from "../MODEL/locations.js";
import { RU } from "../MODEL/languages/ru.js";
import { EN } from "../MODEL/languages/en.js";
const tabHandle = (card) => {
  const firstCard = document.querySelector(
    ".main_info-section_left-side_card-first"
  );
  const secondCard = document.querySelector(
    ".main_info-section_left-side_card-second"
  );
  const thirdCard = document.querySelector(
    ".main_info-section_left-side_card-third"
  );
  switch (card.id) {
    case "now":
      cities.tab = "now";
      card.classList.add("active");
      details.classList.remove("active");
      forecast.classList.remove("active");
      firstCard.style.display = "block";
      secondCard.style.display = "none";
      thirdCard.style.display = "none";
      break;
    case "details":
      cities.tab = "details";
      card.classList.add("active");
      now.classList.remove("active");
      forecast.classList.remove("active");
      secondCard.style.display = "block";
      firstCard.style.display = "none";
      thirdCard.style.display = "none";
      break;
    case "forecast":
      cities.tab = "forecast";
      card.classList.add("active");
      details.classList.remove("active");
      now.classList.remove("active");
      thirdCard.style.display = "block";
      firstCard.style.display = "none";
      secondCard.style.display = "none";
  }
};
const tabOnClick = (event) => {
  const tab = event.target;
  tabHandle(tab);
};
export const giveTabs = () => {
  const tabs = document.querySelector(".main_info-section_left-side_tabs");
  const myTab = document.getElementById(cities.tab);
  const now = document.getElementById("now");
  now.textContent = cities.lang === "ru" ? RU.NOW : EN.NOW;
  const details = document.getElementById("details");
  details.textContent = cities.lang === "ru" ? RU.DETAILS : EN.DETAILS;
  const forecast = document.getElementById("forecast");
  forecast.textContent = cities.lang === "ru" ? RU.FORECAST : EN.FORECAST;
  myTab.classList.add("active");
  tabHandle(myTab);
  tabs.addEventListener("click", tabOnClick);
};
