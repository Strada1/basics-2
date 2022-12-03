import { langHandler } from "../CONTROLLER/handlers.js";
export const langSwitcher = () => {
  const langSwitch = document.querySelector(
    ".main_info-section_locations-lang"
  );
  langSwitch.addEventListener("click", langHandler);
};
