export const UI_ELEMENTS = {
  FORM: document.querySelector('.weather__search-form'),
  INPUT_FORM: document.querySelector('.weather__search-input'),
  TABS: document.querySelectorAll('.tabs-item'),
  NOW_TEMPERATURE: document.querySelector('.now__temperature'),
  NOW_CITY: document.querySelector('.now__sities'),
  NOW_ICON: document.querySelector('.now__icon'),
  NOW_BTN_LIKE: document.querySelector('.now__sities-btn'),
}

let favoriteList = [];

UI_ELEMENTS.TABS.forEach((item) => {
  item.addEventListener('click', () => {
    UI_ELEMENTS.TABS.forEach((item) => {
      item.classList.remove('tabs-item--active')
    })
    item.classList.add('tabs-item--active')
  })
})

UI_ELEMENTS.NOW_BTN_LIKE.addEventListener('click', () => {
  const cityName = UI_ELEMENTS.NOW_BTN_LIKE.previousElementSibling.textContent;
  UI_ELEMENTS.NOW_BTN_LIKE.classList.toggle('now__sities-btn--like');
  if (UI_ELEMENTS.NOW_BTN_LIKE.className === 'now__sities-btn now__sities-btn--like') {
    favoriteList.push(cityName)
  } else {
    favoriteList = favoriteList.filter((item) => {
      return item != cityName;
    })
  }

  console.log(favoriteList);
});

function checkFavoriteList() {

}

export function showWeatherNow(data) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  UI_ELEMENTS.NOW_TEMPERATURE.textContent = data.main.temp.toFixed(1);
  UI_ELEMENTS.NOW_CITY.textContent = data.name;
  UI_ELEMENTS.NOW_ICON.setAttribute('src', iconUrl)
}

