export const UI_ELEMENTS = {
  FORM: document.querySelector('.weather__search-form'),
  TABS: document.querySelectorAll('.tabs-item'),
  BTN_LIKE: document.querySelector('.now__sities-btn')
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