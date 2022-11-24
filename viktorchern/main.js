const list = [ 
  { 
    name: 'Create a post',
    status: 'To do',
    priority: 'low',
  }, 
  {
    name: 'Test', 
    status: 'Done', 
    priority: 'high',
  },
  {
    name: 'Watch TV today', 
    status: 'Done', 
    priority: 'low',
  },
  {
    name: 'Go to shop', 
    status: 'To do', 
    priority: 'high',
  },
  {
    name: 'Play chess', 
    status: 'Done', 
    priority: 'low',
  },
];

const STATUS = {
  TODO: 'To do',
  DONE: 'Done',
};

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
};

const ERRORS = {
  TASK_EXISTS: 'Такой таск уже есть',
  TASK_EMPTY: 'Вы ничего не добавили',
}

// Add task
function addTask(name, status = STATUS.TODO, priority = PRIORITY.LOW) {
  let taskIndex = list.findIndex(function(item){
    return item.name.toLowerCase() == name.toLowerCase();
  });


  try {
    if( taskIndex !== -1 ){
      throw new SyntaxError(ERRORS.TASK_EXISTS);
    } else if( name === '' ) {
      throw new SyntaxError(ERRORS.TASK_EMPTY);
    }
    list.push({ name, status, priority });
  } catch(err) {
    alert(err.message);
  }
}

//Change task
function changeStatus(name, status) {
  const TODO__ID = Number(this.closest('.todo__item').dataset.id);
  const TODO__STATUS = this.checked;

  if( TODO__STATUS ){
    list[TODO__ID].status = STATUS.DONE;
  } else {
    list[TODO__ID].status = STATUS.TODO;
  }
  render();
}

//Delete task
function deleteTask(name) {
  const TODO__ID = Number(this.closest('.todo__item').dataset.id);
  list.splice(TODO__ID, 1);
  render();
}

//Create tags
function createTag(tagName, tagclass, tagdata, tagDataId, tagType){
  let NEW_ELEMENT = document.createElement(tagName);
  if( tagclass ){
    NEW_ELEMENT.className = tagclass;
  }
  if( tagdata ){
    NEW_ELEMENT.setAttribute('data-id', tagDataId);
  }
  if( tagType ){
    NEW_ELEMENT.type = tagType;
  }
  return NEW_ELEMENT;
}

//Create to do item
function createToDoItem(content, status, id){
  const TODO__ITEM = createTag('li', 'todo__item todo-item', 'data-id', id);
  const TODO__ROW = createTag('div', 'todo__row');
  const TODO__COL_1 = createTag('div', 'todo__col');
  const TODO__COL_2 = TODO__COL_1.cloneNode(true);
  const TODO__COL_3 = TODO__COL_1.cloneNode(true);
  const TODO__INPUT = createTag('input', 'todo__input', '', '', 'checkbox');

  if( status === STATUS.DONE ){
    TODO__INPUT.checked = 'checked';
  }
  TODO__INPUT.addEventListener('change', changeStatus);
  
  const TODO__CNT = createTag('div', 'todo__cnt');
  TODO__CNT.textContent = content;

  const TODO__BUTTON_DELETE = createTag('div', 'todo__button todo__button_delete');
  TODO__BUTTON_DELETE.addEventListener('click', deleteTask);

  TODO__COL_1.append(TODO__INPUT);
  TODO__COL_2.append(TODO__CNT);
  TODO__COL_3.append(TODO__BUTTON_DELETE);
  TODO__ROW.append(TODO__COL_1, TODO__COL_2, TODO__COL_3);
  TODO__ITEM.append(TODO__ROW);
  
  return TODO__ITEM;
}

//Submit form
function submitForm(e){
  e.preventDefault();
  const TODO_ID = this.closest('.todo').id;
  const INPUT_VALUE = this.querySelector('.todo__input').value;

  if( TODO_ID === 'todo-high' ){
    addTask(INPUT_VALUE, STATUS.TODO, PRIORITY.HIGH);
    render();
  } else if( TODO_ID === 'todo-low' ){
    addTask(INPUT_VALUE, STATUS.TODO, PRIORITY.LOW);
    render();
  }
}
document.querySelectorAll('.todo__form').forEach(function(item){
  item.addEventListener('submit', submitForm);
});

// To do render
function render(){
  const TODO_LIST_LOW = document.querySelector('#todo-low .todo__list');
  const TODO_LIST_HIGH = document.querySelector('#todo-high .todo__list');

  TODO_LIST_LOW.textContent = '';
  TODO_LIST_HIGH.textContent = '';

  list.forEach(function(item, index){
    if( item.priority === PRIORITY.LOW ){
      TODO_LIST_LOW.prepend(createToDoItem(item.name, item.status, index));
    } else if( item.priority === PRIORITY.HIGH ){
      TODO_LIST_HIGH.prepend(createToDoItem(item.name, item.status, index));
    }
  });
}
render();