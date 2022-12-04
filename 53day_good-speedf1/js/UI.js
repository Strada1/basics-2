export const UI_ELEMENTS = {
  TABS: document.querySelectorAll('.tabs-item'),
  LIKE: document.querySelector('.hearth')
}

UI_ELEMENTS.TABS.forEach((item) => {
  item.addEventListener('click', () => {
    UI_ELEMENTS.TABS.forEach((item) => {
      item.classList.remove('btn--active')
    })
    item.classList.add('btn--active')
  })
})

UI_ELEMENTS.LIKE.addEventListener('click', () => {
  UI_ELEMENTS.BTN_LIKE.classList.toggle('now__sities-btn--like')
})