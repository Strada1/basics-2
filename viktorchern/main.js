function createToDoItem(content){
  const TODO__ITEM = document.createElement('li');
  TODO__ITEM.className = 'todo__item todo-item';

  const TODO__ROW = document.createElement('div');
  TODO__ROW.className = 'todo__row';

  const TODO__COL_1 = document.createElement('div');
  TODO__COL_1.className = 'todo__col';
  const TODO__COL_2 = TODO__COL_1.cloneNode(true);
  const TODO__COL_3 = TODO__COL_1.cloneNode(true);

  const TODO__INPUT = document.createElement('input');
  TODO__INPUT.className = 'todo__input';
  TODO__INPUT.type = 'checkbox';
  
  const TODO__CNT = document.createElement('div');
  TODO__CNT.className = 'todo__cnt';
  TODO__CNT.textContent = content;

  const TODO__BUTTON = document.createElement('div');
  TODO__BUTTON.className = 'todo__button todo__button_delete';

  TODO__COL_1.append(TODO__INPUT);
  TODO__COL_2.append(TODO__CNT);
  TODO__COL_3.append(TODO__BUTTON);
  TODO__ROW.append(TODO__COL_1, TODO__COL_2, TODO__COL_3);
  TODO__ITEM.append(TODO__ROW);
  
  return TODO__ITEM;
}

function submitForm(e){
  const INPUT_VALUE = this.querySelector('.todo__input').value;
  const toDoItem = createToDoItem(INPUT_VALUE);

  this.querySelector('.todo__list').prepend(toDoItem);

  e.preventDefault();
}
document.querySelectorAll('.todo__form').forEach(function(item){
  item.addEventListener('submit', submitForm);
});