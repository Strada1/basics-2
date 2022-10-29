const STATUS = {
   TODO: "To Do",
   DONE: "Done",
   INPROGRESS: "In Progress",
};

const PRIORITY = {
   HIGH: "high",
   LOW: "low",
};

const DASH = '-';

const list = [
   {
      name: 'create a post',
      status: STATUS.INPROGRESS,
      priority: PRIORITY.LOW
   },
   {
      name: 'buy an elephant',
      status: STATUS.DONE,
      priority: PRIORITY.HIGH
   },
];

function changeStatus(nameOfTask, statusTask) {
   let pos;
   pos = list.findIndex(task => task.name == nameOfTask);
   if (pos == -1) {
      console.log(`Таски: «${nameOfTask}» нет в ToDo.`);
   }
   else {
      list[pos].status = statusTask;
      console.log(`Статус таски: «${nameOfTask}» обновлен.`);
   }
}

function changePriority(nameOfTask, priorityTask) {
   let pos;
   pos = list.findIndex(task => task.name == nameOfTask);
   if (pos == -1) {
      console.log(`Таски: «${nameOfTask}» нет в ToDo.`);
   }
   else {
      list[pos].priority = priorityTask;
      console.log(`Приоритет таски: «${nameOfTask}» обновлен.`);
   }
}

function addTask(nameNewTask, priorityTask) {
   let pos;
   pos = list.findIndex(task => task.name == nameNewTask);
   if (pos == -1) {
      list.push({
         name: nameNewTask,
         status: STATUS.TODO,
         priority: priorityTask
      });
      console.log(`Задача: «${nameNewTask}» успешна добавлена в ваш ToDo.`);
   }
   else {
      console.log(`Задача: «${nameNewTask}» уже существует в ToDo`);
   }
}

function deleteTask(nameOfTask) {
   let pos;
   pos = list.findIndex(task => task.name == nameOfTask);
   if (pos == -1) {
      console.log(`Задачи: «${nameOfTask}» не существует в ToDo.`);
   }
   else {
      list.splice(pos);
      console.log(`Задача: «${nameOfTask}» успешно удалена из ToDo.`);
   }
};

function showList() {
   console.log(`\n=====================`);
   console.log(`${STATUS.TODO}:`);
   let flagToDo = false;
   list.forEach((task) => {
      if (task.status === STATUS.TODO) {
         console.log(`\t${task.name}, приоритет: ${task.priority}`);
         flagToDo = true;
      };
   })
   if (flagToDo == false) {
      console.log(`\t${DASH}`);
   }
   console.log(`${STATUS.INPROGRESS}:`)
   let flagProgress = false;
   list.forEach((task) => {
      if (task.status === STATUS.INPROGRESS) {
         console.log(`\t${task.name}, приоритет: ${task.priority}`);
         flagProgress = true;
      };
   })
   if (flagProgress == false) {
      console.log(`\t${DASH}`);
   }
   console.log(`${STATUS.DONE}:`)
   let flagDone = false;
   list.forEach((task) => {
      if (task.status === STATUS.DONE) {
         console.log(`\t${task.name}`);
         flagDone = true;
      };
   })
   if (flagDone == false) {
      console.log(`\t${DASH}`);
   }
   console.log(`=====================\n`);
}

addTask("go to the gym", PRIORITY.HIGH);
addTask("go to the gym", PRIORITY.HIGH);
showList();
changePriority('create a post', PRIORITY.LOW);
changeStatus("go to the gym", STATUS.INPROGRESS);
showList();
deleteTask("go to the gym");
showList();

