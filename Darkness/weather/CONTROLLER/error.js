import { drawError } from "../VIEW/notification/notification.js";
export const errorHandle = (error) => {
  if (error.name === "TypeError") {
    drawError("Ошибка запроса или сети.");
  } else {
    drawError(error.name);
  }
};
