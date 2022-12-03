import { createElementWithClassname } from "../../CONTROLLER/helpers.js";
export const detailsCard = (
  { name, temp, feelsLike, WeatherDescription, sunrise, sunset },
  langObj
) => {
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
  secondCardTemp.textContent = langObj.TEMPERATURE + ": " + temp + "°";
  const secondCardFeelsLike = document.createElement("p");
  secondCardFeelsLike.textContent = langObj.FEELS_LIKE + ": " + feelsLike + "°";
  const secondCardWeather = document.createElement("p");
  secondCardWeather.textContent = langObj.WEATHER + ": " + WeatherDescription;
  const secondCardSunrise = document.createElement("p");
  secondCardSunrise.textContent = langObj.SUNRISE + ": " + sunrise;
  const secondCardSunset = document.createElement("p");
  secondCardSunset.textContent = langObj.SUNSET + ": " + sunset;
  secondCardDetails.append(secondCardTemp);
  secondCardDetails.append(secondCardFeelsLike);
  secondCardDetails.append(secondCardWeather);
  secondCardDetails.append(secondCardSunrise);
  secondCardDetails.append(secondCardSunset);
  secondCard.append(secondCardTitle);
  secondCard.append(secondCardDetails);
  return secondCard;
};
