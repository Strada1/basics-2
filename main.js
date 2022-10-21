const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

const TODO_STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  DEFAULT_STATUS: "In Progress",
  UNKNOW_TASK_STATUS: "Task or status not found",
}

function addTask(taskName) {
  list[taskName] = TODO_STATUS.DEFAULT_STATUS;
}

function changeStatus(taskName, taskStatus) {
  const isValid = taskName in list;
  if (isValid) {
    list[taskName] = taskStatus;
  } else {
    return TODO_STATUS.UNKNOW_TASK_STATUS;
  }
}

function deleteTask(taskName) {
  const isValid = taskName in list;
  if (isValid) {
    delete list[taskName];
  } else {
    return TODO_STATUS.UNKNOW_TASK_STATUS;
  }
}

function showList() {
  let resultTodo = '';
  let resultInProgress = '';
  let resultDone = '';

  for (let key in list) {
    switch (list[key]) {
      case TODO_STATUS.TODO:
        resultTodo += `	${key}\n`;
        break;
      case TODO_STATUS.IN_PROGRESS:
        resultInProgress += `	${key}\n`;
        break;
      case TODO_STATUS.DONE:
        resultDone += `	${key}\n`;
        break;
      default:
        break;
    }
  }
  if (resultTodo.length == 0) {
    resultTodo = "	-";
  } else if (resultInProgress.length == 0) {
    resultInProgress = "	-";
  } else if (resultDone.length == 0) {
    resultDone = "	-";
  }
  console.log(`Todo:\n${resultTodo}`);
  console.log(`${TODO_STATUS.IN_PROGRESS}:\n${resultInProgress}`);
  console.log(`${TODO_STATUS.DONE}:\n${resultDone}`);
}

addTask('Learn JavaScript');
addTask('Go to bed');
changeStatus('Learn JavaScript', TODO_STATUS.TODO)
deleteTask('make a bed');
showList();