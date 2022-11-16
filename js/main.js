import { UI_ELEMENTS, TODO_STATUS, TODO_PRIORITY } from "./constants.js";

let list = [
  { name: 'Посмотреть ютубчик', status: 'To Do', priority: 'low' },
  { name: 'Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.', status: 'To Do', priority: 'high' },
  { name: 'Сверстать этот TODO list', status: 'To Do', priority: 'high' },
  { name: 'Начать делать задачу', status: 'To Do', priority: 'high' },
  { name: 'create a post', status: 'To Do', priority: 'low' },
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
})

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
})



function createTaskDom(taskName) {
  const item = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  const button = document.createElement('button')
  item.classList.add('todo__item');
  label.classList.add('todo__item-label');
  input.classList.add('todo__item-checkbox');
  span.classList.add('todo__item-checkbox--style');
  button.classList.add('todo__item-delete-btn')
  input.setAttribute('type', 'checkbox');
  button.setAttribute('type', 'button');
  item.prepend(label);
  item.append(button);
  label.prepend(input);
  label.append(span);
  label.append(taskName);
  button.addEventListener('click', deleteItem)
  return item;
}

function createItemInHigh(item) {
  UI_ELEMENTS.HIGH_LIST.append(item);
}

function createItemInLow(item) {
  UI_ELEMENTS.LOW_LIST.append(item);
}

function deleteItem() {
  const taskName = this.previousElementSibling.textContent;
  this.parentNode.remove();
  alert(taskName);
  list = list.filter((item) => {
    return item.name != taskName;
  })
}

function renderDocument() {
  UI_ELEMENTS.HIGH_LIST.textContent = '';
  UI_ELEMENTS.LOW_LIST.textContent = '';
  list.forEach((item) => {
    if (item.priority === TODO_PRIORITY.HIGHT) {
      const taskHigh = createTaskDom(item.name);
      createItemInHigh(taskHigh);
    } else {
      const taskLow = createTaskDom(item.name);
      createItemInLow(taskLow);
    }
  })
}

renderDocument();