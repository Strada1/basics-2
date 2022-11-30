import {
  createElementWithClassname,
  getImageURL,
} from "../../CONTROLLER/helpers.js";
import { locations } from "../../MODEL/locations.js";
import { addCity } from "../../CONTROLLER/handlers.js";

export const nowCard = ({ name, icon, temp }) => {
  const firstCard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first"
  );

  const firstCardDigit = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_digit"
  );
  firstCardDigit.textContent = temp + "°";
  const firstCardIcon = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_icon"
  );
  firstCardIcon.style.background = `url(${getImageURL(icon)})`;
  const firstCardTitle = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_title"
  );
  const firstTitleCityName = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-first_title-city"
  );
  firstTitleCityName.textContent = name;
  firstTitleCityName.setAttribute("data-name", name);
  const likeButton = document.createElement("button");
  likeButton.className = locations.includes(name)
    ? "like"
    : "main_info-section_left-side_card-first_title-like";
  likeButton.setAttribute("type", "button");
  likeButton.setAttribute("id", "likeButton");
  likeButton.addEventListener("click", addCity);

  firstCardTitle.append(firstTitleCityName);
  firstCardTitle.append(likeButton);

  firstCard.append(firstCardDigit);
  firstCard.append(firstCardIcon);
  firstCard.append(firstCardTitle);
  return firstCard;
};
