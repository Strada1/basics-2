const list = [
  { name: 'Comeback', status: 'Done', priority: 'high' },
  { name: 'create a post', status: 'In Progress', priority: 'low' },
  { name: 'test', status: 'Done', priority: 'high' }
];

const TODO_STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  DEFAULT_STATUS: "In Progress",
  UNKNOW_TASK_STATUS: "Task or status not found",
}

const TODO_PRIORITY = {
  LOW: 'low',
  HIGHT: 'high',
}

function addTask(taskName, taskPriority) {
  const isValid = taskPriority === TODO_PRIORITY.LOW || taskPriority === TODO_PRIORITY.HIGHT;
  if (isValid) {
    taskPriority = taskPriority;
  } else {
    taskPriority = TODO_PRIORITY.LOW;
  }
  list.push({
    name: taskName,
    status: TODO_STATUS.DEFAULT_STATUS,
    priority: taskPriority,
  })
}

function changeStatus(taskName, taskStatus) {
  isValid = taskStatus == TODO_STATUS.TODO || taskStatus == TODO_STATUS.IN_PROGRESS || taskStatus == TODO_STATUS.DONE;
  list.find(item => {
    if (item.name == taskName && isValid) {
      item.status = taskStatus;
    }
  });
}

function changePriority(taskName, taskPriority) {
  isValid = taskPriority == TODO_PRIORITY.LOW || taskPriority == TODO_PRIORITY.HIGHT;
  list.find(item => {
    if (item.name == taskName && isValid) {
      item.priority = taskPriority;
    }
  })
}

function deleteTask(taskName) {
  let taskIndex = list.findIndex(function (item, index, array) {
    return item == taskName;
  })
  list.splice(taskIndex, 1)
}


function showList() {
  let strTodo = `Todo:\n`;
  let strInProgress = `In Progress:\n`;
  let strDone = `Done:\n`;

  list.forEach(function (item) {
    switch (item.status) {
      case TODO_STATUS.TODO:
        strTodo += `  ${item.name}\n`;
        break;
      case TODO_STATUS.IN_PROGRESS:
        strInProgress += `  ${item.name}\n`;
        break;
      case TODO_STATUS.DONE:
        strDone += `  ${item.name}\n`;
        break;
    };
  });

  if (strTodo.length == 6) {
    strTodo += `  -\n`;
  } else if (strInProgress.length == 6) {
    strInProgress += `  -\n`;
  } else if (strDone.length == 6) {
    strDone += `  -\n`;
  }
  console.log(strTodo);
  console.log(strInProgress);
  console.log(strDone);
}

addTask('sleep', TODO_PRIORITY.LOW);
changeStatus('sleep', TODO_STATUS.DONE);
changePriority('sleep', TODO_PRIORITY.HIGHT);
deleteTask('sleep')
showList();
