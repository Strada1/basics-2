import { TIMEMETHOD } from "../../MODEL/timemethods.js";
import {
  createElementWithClassname,
  getTimeFrom,
} from "../../CONTROLLER/helpers.js";
export const detailsCard = ({
  name,
  temp,
  feelsLike,
  weatherMain,
  sunrise,
  sunset,
}) => {
  const secondCard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-second"
  );
  const secondCardTitle = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-second-title"
  );
  secondCardTitle.textContent = name;
  const secondCardDetails = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-second-details"
  );
  const secondCardTemp = document.createElement("p");
  secondCardTemp.textContent = `Temperature:` + temp + "°";
  const secondCardFeelsLike = document.createElement("p");
  secondCardFeelsLike.textContent = `Feels like:` + feelsLike + "°";
  const secondCardWeather = document.createElement("p");
  secondCardWeather.textContent = `Weather:` + weatherMain;
  const secondCardSunrise = document.createElement("p");
  secondCardSunrise.textContent =
    `Sunrise:` + getTimeFrom(TIMEMETHOD.TIMESTAMP_TO_HOURS_MINUTES, sunrise);
  const secondCardSunset = document.createElement("p");
  secondCardSunset.textContent =
    `Sunset:` + getTimeFrom(TIMEMETHOD.TIMESTAMP_TO_HOURS_MINUTES, sunset);
  secondCardDetails.append(secondCardTemp);
  secondCardDetails.append(secondCardFeelsLike);
  secondCardDetails.append(secondCardWeather);
  secondCardDetails.append(secondCardSunrise);
  secondCardDetails.append(secondCardSunset);
  secondCard.append(secondCardTitle);
  secondCard.append(secondCardDetails);
  return secondCard;
};
