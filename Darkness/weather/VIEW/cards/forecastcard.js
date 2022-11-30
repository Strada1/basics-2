import {
  createElementWithClassname,
  getTimeFrom,
  getImageURL,
} from "../../CONTROLLER/helpers.js";
import { TIMEMETHOD } from "../../MODEL/timemethods.js";
export const forecastCard = ({ name }, forecastList) => {
  const thirdCard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third"
  );
  const thirdCardTitle = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-title"
  );
  thirdCardTitle.textContent = name;
  thirdCard.append(thirdCardTitle);
  for (let prognosis of forecastList) {
    thirdCard.append(forecastMinicard(prognosis));
  }
  return thirdCard;
};

const forecastMinicard = ({ date, temp, feels_like, weather, icon }) => {
  const thirdCardMinicard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard"
  );

  const thirdCardMinicardHead = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head"
  );
  const thirdCardMinicardHeadDate = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head-date"
  );
  thirdCardMinicardHeadDate.textContent = getTimeFrom(
    TIMEMETHOD.DT_TO_DAY_MONTH,
    date
  );
  const thirdCardMinicardHeadTime = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head-time"
  );
  thirdCardMinicardHeadTime.textContent = getTimeFrom(
    TIMEMETHOD.DT_TO_HOURS_MINUTES,
    date
  );
  thirdCardMinicardHead.append(thirdCardMinicardHeadDate);
  thirdCardMinicardHead.append(thirdCardMinicardHeadTime);
  const thirdCardMinicardFooter = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__footer"
  );

  const thirdCardMinicardFooterDetails = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__footer-details"
  );
  const thirdCardMinicardDetailsTemp = document.createElement("p");
  thirdCardMinicardDetailsTemp.textContent = `Temperature:${temp}°`;
  const thirdCardMinicardDetailsFeelsLike = document.createElement("p");
  thirdCardMinicardDetailsFeelsLike.textContent = `Feels like:${feels_like}°`;
  const thirdCardMinicardFooterWeather = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__footer-weather"
  );
  const thirdCardMinicardFooterWeatherDescribe = document.createElement("p");
  thirdCardMinicardFooterWeatherDescribe.textContent = weather;
  const thirdCardMinicardFoooterImage = document.createElement("img");
  thirdCardMinicardFoooterImage.setAttribute("src", getImageURL(icon));
  thirdCardMinicardFooterDetails.append(thirdCardMinicardDetailsTemp);
  thirdCardMinicardFooterDetails.append(thirdCardMinicardDetailsFeelsLike);
  thirdCardMinicardFooterWeather.append(thirdCardMinicardFooterWeatherDescribe);
  thirdCardMinicardFooterWeather.append(thirdCardMinicardFoooterImage);
  thirdCardMinicardFooter.append(thirdCardMinicardFooterDetails);
  thirdCardMinicardFooter.append(thirdCardMinicardFooterWeather);
  thirdCardMinicard.append(thirdCardMinicardHead);
  thirdCardMinicard.append(thirdCardMinicardFooter);
  return thirdCardMinicard;
};
