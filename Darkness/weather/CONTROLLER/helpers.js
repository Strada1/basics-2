import { RU } from "../MODEL/languages/ru.js";
import { EN } from "../MODEL/languages/en.js";
import { drawError } from "../VIEW/notification/notification.js";
import { cities } from "../MODEL/locations.js";
export const getTimeFrom = (method, value) => {
  let months =
    cities.lang === "ru"
      ? [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
  switch (method) {
    case "timestamp to hours and minutes":
      const date = new Date(value * 1000);
      const hours = date.getHours().toString().padStart(2, 0);
      const minutes = date.getMinutes().toString().padStart(2, 0);
      return `${hours}:${minutes}`;
    case "date and time to day and month":
      const dateObj = new Date(value);
      const dateMonth = dateObj.getDate().toString().padStart(2, 0);

      const month = months[dateObj.getMonth()];
      return `${dateMonth} ${month}`;
    case "date and time to hours and minutes":
      const objDate = new Date(value);
      const hh = objDate.getHours().toString().padStart(2, 0);
      const mm = objDate.getMinutes().toString().padStart(2, 0);
      return `${hh}:${mm}`;
  }
};
export const getImageURL = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const createElementWithClassname = (someElement, classname) => {
  const element = document.createElement(someElement);
  element.className = classname;
  return element;
};

export const languageHelper = (language) => {
  const addLocationsTitle = document.querySelector(
    ".main_info-section_locations-title"
  );
  const ru = document.querySelector(".main_info-section_locations-lang-ru");
  const en = document.querySelector(".main_info-section_locations-lang-en");
  if (language === "ru") {
    ru.classList.add("lang-active");
    en.classList.remove("lang-active");
  } else {
    en.classList.add("lang-active");
    ru.classList.remove("lang-active");
  }
  addLocationsTitle.replaceChildren();
  const justAddCityTitle = document.createElement("p");
  justAddCityTitle.textContent =
    language === "ru"
      ? `${RU.ADD_CITIES}:`
      : language === "en"
      ? `${EN.ADD_CITIES}:`
      : drawError("Ошибка,такого языка нет");
  addLocationsTitle.append(justAddCityTitle);
};
