const list = { //Хранилищем будет объектов, а имена задач - ключами этого объекта
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To do",
  }
  
  function changeStatus (task, Status) { //Функция changeStatus - будет менять статус задачи
    list[task] = Status;
  }
  
  function addTask(newTask) { //функция addTask добавляет новую задачу
    list[newTask] = "To do";
  }
  
  function deleteTask(task) { //Функция deleteTask - удаляет задачу
    delete list[task];
  }
  
  function showList() {
    let InProgress = '';
    let Done = '';
    let ToDo = '';
    
    for (let task in list) {
        if (list[task] === 'To Do') {
            ToDo += ` "${task}"`;
        } else if (list[task] === 'Done') {
            Done += ` "${task}"`;
        } else if (list[task] === 'In Progress') {
            InProgress += ` "${task}"`;
        }
    }
    console.log(`To Do:\ ${ToDo || '-'}\nIn Progress:\n ${InProgress || '-'}\nDone:\n ${Done || '-'}`);
  } 
  
  changeStatus("create a new practice task", "To Do");
  addTask("create todo list");
  changeStatus("writw a post", "In Progress");
  deleteTask("create todo list");
  addTask("create a branch on Github");
  deleteTask("make a bed");
  showList();