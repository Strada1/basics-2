import { UI_ELEMENTS, TODO_STATUS, TODO_PRIORITY } from "./constants.js";
import { createTaskDom, createItemInLow, createItemInHigh } from "./create.js"

let list = [
  { name: 'Посмотреть ютубчик', status: 'To Do', priority: 'low' },
  { name: 'Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.', status: 'To Do', priority: 'high' },
  { name: 'Сверстать этот TODO list', status: 'To Do', priority: 'high' },
  { name: 'Начать делать задачу', status: 'Done', priority: 'high' },
  { name: 'create a post', status: 'Done', priority: 'low' },
];

UI_ELEMENTS.HIGH_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = UI_ELEMENTS.INPUT_HIGH.value;
  list.push({
    name,
    status: TODO_STATUS.TODO,
    priority: TODO_PRIORITY.HIGHT
  });
  renderDocument()
  event.target.reset();
});

UI_ELEMENTS.LOW_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = UI_ELEMENTS.INPUT_LOW.value;
  list.push({
    name,
    status: TODO_STATUS.TODO,
    priority: TODO_PRIORITY.LOW
  });
  renderDocument()
  event.target.reset();
});

export function changeStatus() {
  const item = this.parentNode.parentNode;
  item.classList.toggle("item-checked")
  console.log(this.previousElementSibling.textContent);
}

export function deleteItem() {
  const taskName = this.previousElementSibling.textContent;
  this.parentNode.remove();
  list = list.filter((item) => {
    return item.name != taskName;
  });
}

function renderDocument() {
  UI_ELEMENTS.HIGH_LIST.textContent = '';
  UI_ELEMENTS.LOW_LIST.textContent = '';
  list.forEach((item) => {
    if (item.priority === TODO_PRIORITY.HIGHT) {
      const taskHigh = createTaskDom(item.name, item.status);
      createItemInHigh(taskHigh);
    } else {
      const taskLow = createTaskDom(item.name, item.status);
      createItemInLow(taskLow);
    }
  })
}

renderDocument();