import { TIMEMETHOD } from "../timemethods.js";
import { getTimeFrom } from "../../CONTROLLER/helpers.js";
export const weatherInterface = (Object) => {
  const needInfo = {
    id: Object.id,
    name: Object.name,
    temp: Math.round(Object.main.temp),
    feelsLike: Math.round(Object.main.feels_like),
    weatherMain: Object.weather[0].main,
    WeatherDescription: Object.weather[0].description,
    sunrise: getTimeFrom(
      TIMEMETHOD.TIMESTAMP_TO_HOURS_MINUTES,
      Object.sys.sunrise
    ),
    sunset: getTimeFrom(
      TIMEMETHOD.TIMESTAMP_TO_HOURS_MINUTES,
      Object.sys.sunset
    ),
    icon: Object.weather[0].icon,
  };
  return needInfo;
};
