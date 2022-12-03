import { TIMEMETHOD } from "../timemethods.js";
import { getTimeFrom } from "../../CONTROLLER/helpers.js";
export const forecastInterface = (object) => {
  let forecast = [];
  for (let hour of object.list) {
    const needInfoInForecast = {
      date: getTimeFrom(TIMEMETHOD.DT_TO_DAY_MONTH, hour.dt_txt),
      time: getTimeFrom(TIMEMETHOD.DT_TO_HOURS_MINUTES, hour.dt_txt),
      temp: Math.round(hour.main.temp),
      feels_like: Math.round(hour.main.feels_like),
      weather: hour.weather[0].description,
      icon: hour.weather[0].icon,
    };
    forecast = [...forecast, needInfoInForecast];
  }
  return forecast;
};
