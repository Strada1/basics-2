import { UI_ELEMENTS } from "./ui.js";

UI_ELEMENTS.TABS.forEach((item) => {
  item.addEventListener('click', () => {
    UI_ELEMENTS.TABS.forEach((item) => {
      item.classList.remove('tabs-item--active')
    })
    item.classList.add('tabs-item--active')
  })
})