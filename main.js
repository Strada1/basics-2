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
  if (taskPriority === TODO_PRIORITY.LOW || taskPriority === TODO_PRIORITY.HIGHT) {
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

function changeStatus(taskName, taskStatus) { }

function deleteTask(taskName) { }

function showList() { }

addTask('sleep', 'high');
console.log(list);