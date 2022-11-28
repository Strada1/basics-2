export const UI_ELEMENTS = {
  FORM: document.querySelector('.weather__search-form'),
  INPUT_FORM: document.querySelector('.weather__search-input'),
  TABS: document.querySelectorAll('.tabs-item'),
  BTN_LIKE: document.querySelector('.now__sities-btn'),
  NOW_TEMPERATURE: document.querySelector('.now__temperature'),
  NOW_CITY: document.querySelector('.now__sities'),
}

UI_ELEMENTS.TABS.forEach((item) => {
  item.addEventListener('click', () => {
    UI_ELEMENTS.TABS.forEach((item) => {
      item.classList.remove('tabs-item--active')
    })
    item.classList.add('tabs-item--active')
  })
})

UI_ELEMENTS.BTN_LIKE.addEventListener('click', () => {
  UI_ELEMENTS.BTN_LIKE.classList.toggle('now__sities-btn--like')
})

export function showWeatherNow(data) {
  UI_ELEMENTS.NOW_TEMPERATURE.textContent = data.main.temp.toFixed(1);
  UI_ELEMENTS.NOW_CITY.textContent = data.name;
}