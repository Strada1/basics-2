export const giveTabs = () => {
  const tabs = document.querySelector(".main_info-section_left-side_tabs");
  const firstCard = document.querySelector(
    ".main_info-section_left-side_card-first"
  );
  const secondCard = document.querySelector(
    ".main_info-section_left-side_card-second"
  );
  const thirdCard = document.querySelector(
    ".main_info-section_left-side_card-third"
  );
  const now = document.getElementById("now");
  const details = document.getElementById("details");
  const forecast = document.getElementById("forecast");
  now.classList.add("active");
  details.classList.remove("active");
  forecast.classList.remove("active");
  tabs.addEventListener("click", (event) => {
    const tab = event.target;
    switch (tab.id) {
      case "now":
        tab.classList.add("active");
        details.classList.remove("active");
        forecast.classList.remove("active");
        firstCard.style.display = "block";
        secondCard.style.display = "none";
        thirdCard.style.display = "none";
        break;
      case "details":
        tab.classList.add("active");
        now.classList.remove("active");
        forecast.classList.remove("active");
        secondCard.style.display = "block";
        firstCard.style.display = "none";
        thirdCard.style.display = "none";
        break;
      case "forecast":
        tab.classList.add("active");
        details.classList.remove("active");
        now.classList.remove("active");
        thirdCard.style.display = "block";
        firstCard.style.display = "none";
        secondCard.style.display = "none";
    }
  });
};
