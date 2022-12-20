// Попробуйте применить это в “TODO” (создание объекта задачи) или “Погоде” (создание объекта города в избранном)

//Ваш код будет выглядеть примерно так:
//const tasks = new Task(’переписать TODO с конструктором’)

//А есть ли в этом хоть какой-то смысл?  Да, определенно есть. И не только когда вы пробуете писать в ООП стиле. Даже на примере такого простого объекта как Tasks можно увидеть что для новой задачи вам не нужно передавать ее статус, а это уменьшает кол-во ошибок при создании новых задач, а еще уменьшает кол-во кода. Уменьшение кол-ва кода - лучший способ для уменьшения кол-ва багов. Абсолютно серьезно, чем больше шансов для ошибок - тем больше ошибок.

// TODO из Lesson #45 (01_basics)

const UI_ELEMENTS = {
  ADD_TASK_HIGHT: document.querySelector(".button_add_task_hight"),
  ADD_TASK_LOW: document.querySelector(".button_add_task_low"),
  INPUT_TEXT_HIGHT: document.querySelector(".input_task_hight"),
  INPUT_TEXT_LOW: document.querySelector(".input_task_low"),
  INPUT_FORM_HIGHT: document.querySelector(".input_form_hight"),
  INPUT_FORM_LOW: document.querySelector(".input_form_low"),
  PUSH_PRIORITY_HIGHT: document.querySelector(".hight_task_container"),
  PUSH_PRIORITY_LOW: document.querySelector(".low_task_container"),
};

const CHECK = {
  CHANGE_DONE: "Задача выполнена",
  CHANGE_DEFAULT: "Задача не выполнена",
  CHANGE_PRIORITY: "Приоритет изминен",
  ADD_TASK_MASSIVE: "[MASSIVE] - Добавлена новая задача",
  DELETE_TASK_MASSIVE: "[MASSIVE] - Задача уадалена",
  IS_RENDER: "[RENDER] - Complete",
};

const PRIORITY = {
  HIGHT: "Hight",
  LOW: "Low",
};

const STATUS = {
  DONE: "Done",
  TO_DO: "To Do",
};

const taskList = [];

const DEFAULT_STATUS = STATUS.TO_DO;

function Constructor(nameTask, priorityTask) {
  this.name = nameTask;
  this.status = DEFAULT_STATUS;
  this.priority = priorityTask;
}

function addTask(nameTask, priorityTask) {
  let findName = taskList.findIndex(function (findName) {
    return findName.name === nameTask;
  });
  if (findName >= 0) {
    return;
  } else {
    let task = new Constructor(nameTask, priorityTask);
    taskList.push(task);
  }
  render();
}

function deleteTask(idTask) {
  taskList.splice(idTask, 1);
  console.log(CHECK.DELETE_TASK_MASSIVE);
  render();
}

function changeStatus(idTask) {
  if (taskList[idTask].status == STATUS.TO_DO) {
    return (taskList[idTask].status = STATUS.DONE);
  } else if (taskList[idTask].status == STATUS.DONE) {
    return (taskList[idTask].status = STATUS.TO_DO);
  }
  console.log(CHECK.CHANGE_DONE);
  render();
}

function pushTaskUi(task, index, taskRender) {
  let divTask = document.createElement("div");
  let nameTask = document.createElement("label");
  let checkStatus = document.createElement("input");
  let deleteButton = document.createElement("div");

  divTask.className = "task";
  divTask.id = index;
  checkStatus.className = "checkbox";
  checkStatus.type = "checkbox";
  deleteButton.className = "button_delete_task";
  deleteButton.textContent = "×";

  divTask.append(nameTask);
  nameTask.append(checkStatus);
  nameTask.append(task.name);
  divTask.append(deleteButton);
  taskRender.append(divTask);

  deleteButton.addEventListener("click", function () {
    deleteTask(divTask.id);
  });

  checkStatus.addEventListener("change", function () {
    changeStatus(divTask.id);
  });

  if (task.status == STATUS.DONE) {
    checkStatus.setAttribute("checked", true);
  }
}

function render() {
  UI_ELEMENTS.PUSH_PRIORITY_HIGHT.innerHTML = "";
  UI_ELEMENTS.PUSH_PRIORITY_LOW.innerHTML = "";

  taskList.forEach(function (task, index) {
    if (task.priority === PRIORITY.HIGHT) {
      const taskRender = UI_ELEMENTS.PUSH_PRIORITY_HIGHT;
      pushTaskUi(task, index, taskRender);
      UI_ELEMENTS.INPUT_FORM_HIGHT.reset();
    } else if (task.priority === PRIORITY.LOW) {
      const taskRender = UI_ELEMENTS.PUSH_PRIORITY_LOW;
      pushTaskUi(task, index, taskRender);
      UI_ELEMENTS.INPUT_FORM_LOW.reset();
    }
  });
}

UI_ELEMENTS.INPUT_FORM_HIGHT.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(UI_ELEMENTS.INPUT_TEXT_HIGHT.value, PRIORITY.HIGHT);
});

UI_ELEMENTS.INPUT_FORM_LOW.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask(UI_ELEMENTS.INPUT_TEXT_LOW.value, PRIORITY.LOW);
});

