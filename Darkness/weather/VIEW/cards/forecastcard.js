import {
  createElementWithClassname,
  getImageURL,
} from "../../CONTROLLER/helpers.js";
export const forecastCard = ({ name }, forecastList, langObj) => {
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
    thirdCard.append(forecastMinicard(prognosis, langObj));
  }
  return thirdCard;
};

const forecastMinicard = (
  { date, time, temp, feels_like, weather, icon },
  langObj
) => {
  const thirdCardMinicard = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard"
  );
  const hour = +time.split(":")[0];
  if (hour >= 6 && hour < 21) {
    thirdCardMinicard.classList.add("day-card");
  } else {
    thirdCardMinicard.classList.add("night-card");
  }

  const thirdCardMinicardHead = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head"
  );
  const thirdCardMinicardHeadDate = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head-date"
  );
  thirdCardMinicardHeadDate.textContent = date;
  const thirdCardMinicardHeadTime = createElementWithClassname(
    "section",
    "main_info-section_left-side_card-third-minicard__head-time"
  );
  thirdCardMinicardHeadTime.textContent = time;
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
  thirdCardMinicardDetailsTemp.textContent = `${langObj.TEMPERATURE}:${temp}°`;
  const thirdCardMinicardDetailsFeelsLike = document.createElement("p");
  thirdCardMinicardDetailsFeelsLike.textContent = `${langObj.FEELS_LIKE}:${feels_like}°`;
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
