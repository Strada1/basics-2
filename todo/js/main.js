const STATUS = {
   TODO: "To Do",
   DONE: "Done",
};

const PRIORITY = {
   HIGH: "high",
   LOW: "low",
};

const UI_ELEMENTS = {
   INPUT: document.querySelector(".entered-list"),
   BTN_ADD: document.querySelector(".add-list"),
   TASKS: document.querySelector(".tasks"),
   FORM: document.querySelector(".form"),
   FORM_LOW: document.querySelector(".form-low"),
   INPUT_LOW: document.querySelector(".entered-list-low"),
   TASKS_LOW: document.querySelector(".tasks-low"),
};

const list = [];

function ShowTaskInHtml(inputValue, inputStatus, whereShow) {

   let item = document.createElement('div');
   item.className = 'item';

   let checkbox = document.createElement('input');
   checkbox.type = "checkbox";
   checkbox.addEventListener('click', changeStatus);

   if (inputStatus === STATUS.DONE) {
      checkbox.checked = true;
      item.style.background = '#8EC5FC';
   }

   let taskName = document.createElement('div');
   taskName.className = 'task';
   taskName.textContent = inputValue;

   let button = document.createElement('button');
   button.className = 'delete-task';
   button.textContent = '-';

   button.addEventListener('click', function () {
      deleteTaskArray(taskName.textContent);
   });

   item.append(checkbox);
   item.append(taskName);
   item.append(button);

   whereShow.append(item);
}

function changeStatus() {
   list.map((item) => {
      if (item.name === this.nextElementSibling.textContent) {
         if (item.status === 'To Do') {
            item.status = 'Done'
         } else {
            item.status = 'To Do'
         }
      }
   })
   render()
}

function addTaskArray(nameNewTask, priorityTask) {
   let pos = list.findIndex(task => task.name == nameNewTask);
   if (pos == -1) {
      list.push({
         name: nameNewTask,
         status: STATUS.TODO,
         priority: priorityTask
      });
      console.log(`Задача: «${nameNewTask}» успешна добавлена в ваш ToDo.`);
      return list;
   }
   alert(`Задача: «${nameNewTask}» уже существует в ToDo`);
}

function deleteTaskArray(nameOfTask) {
   list = list.filter(task => task.name !== nameOfTask);
   render();
};

function render() {
   let items = document.querySelectorAll(".item");
   for (let item of items) {
      item.remove();
   }
   list.forEach((elem) => {
      if (elem.priority === PRIORITY.HIGH) {
         ShowTaskInHtml(elem.name, elem.status, UI_ELEMENTS.TASKS);
      }
      else {
         ShowTaskInHtml(elem.name, elem.status, UI_ELEMENTS.TASKS_LOW);
      }
   });
}

UI_ELEMENTS.FORM.addEventListener('submit', function (e) {
   e.preventDefault();
   addTaskArray(UI_ELEMENTS.INPUT.value, PRIORITY.HIGH);
   render();
});

UI_ELEMENTS.FORM_LOW.addEventListener('submit', function (e) {
   e.preventDefault();
   addTaskArray(UI_ELEMENTS.INPUT_LOW.value, PRIORITY.LOW);
   render();
});
