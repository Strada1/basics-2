const list = [{ name: 'create a post', status: 'In progress', priority: 'low' }, { name: 'test', status: 'Done', priority: 'high' }];

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
  list.find(item => {
    if (item.name == taskName) {
      item.status = taskStatus;
    }
  });
}

function deleteTask(taskName) {
  list.find((item, index) => {
    if (item.name == taskName) {
      list.splice(index, 1);
    }
  });
}

// deleteTask('test')
// console.log(list);
changeStatus('test', TODO_STATUS.IN_PROGRESS);
console.log(list);


function showList() { }

addTask('sleep', 'high');


