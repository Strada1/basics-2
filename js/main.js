import { UI_ELEMENTS, TODO_STATUS, TODO_PRIORITY } from "./constants.js";
import { createTaskDom, createItemInLow, createItemInHigh } from "./create.js";

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
    priority: TODO_PRIORITY.HIGHT,
  });
  createStorageList();
  renderDocument();
  event.target.reset();
});

UI_ELEMENTS.LOW_FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = UI_ELEMENTS.INPUT_LOW.value;
  list.push({
    name,
    status: TODO_STATUS.TODO,
    priority: TODO_PRIORITY.LOW,
  });
  createStorageList();
  renderDocument();
  event.target.reset();
});

export function changeStatus() {
  const taskName = this.parentNode.nextSibling.textContent;
  list.map((item) => {
    if (item.name === taskName) {
      if (item.status === TODO_STATUS.TODO) {
        item.status = TODO_STATUS.DONE;
      } else {
        item.status = TODO_STATUS.TODO;
      }
    }
  })
  const item = this.parentNode.parentNode;
  item.classList.toggle("item-checked");
  createStorageList();
}

export function deleteItem() {
  const taskName = this.parentNode.textContent;
  this.parentNode.remove();
  list = list.filter((item) => {
    return item.name != taskName;
  });
  createStorageList();
}

function renderDocument() {
  list = getStorageList();
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

function createStorageList() {
  const storageList = JSON.stringify(list);
  localStorage.setItem('list', storageList);
}

function getStorageList() {
  const storageList = localStorage.getItem('list');
  if (storageList) {
    return JSON.parse(storageList);
  } else {
    return list;
  }
}

renderDocument();