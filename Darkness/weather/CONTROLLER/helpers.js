export const getTimeFrom = (method, value) => {
  switch (method) {
    case "timestamp to hours and minutes":
      const date = new Date(value * 1000);
      const hours = date.getHours().toString().padStart(2, 0);
      const minutes = date.getMinutes().toString().padStart(2, 0);
      return `${hours}:${minutes}`;
    case "date and time to day and month":
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const dateObj = new Date(value);
      const dateMonth = dateObj.getDate().toString().padStart(2, 0);
      const month = months[dateObj.getMonth()];
      return `${dateMonth} ${month}`;
    case "date and time to hours and minutes":
      const objDate = new Date(value);
      const hh = objDate.getHours().toString().padStart(2, 0);
      const mm = objDate.getMinutes().toString().padStart(2, 0);
      return `${hh}:${mm}`;
  }
};
export const getImageURL = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const createElementWithClassname = (someElement, classname) => {
  const element = document.createElement(someElement);
  element.className = classname;
  return element;
};
