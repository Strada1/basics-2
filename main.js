const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

const DEFAULT_STATUS = "In Progress";
const TASK_ERROR = "Task not found";

function addTask(taskName) {
  list[taskName] = DEFAULT_STATUS;
}

function changeStatus(taskName, taskStatus) {
  const isValid = taskName in list;
  if (isValid) {
    list[taskName] = taskStatus;
  } else {
    return TASK_ERROR;
  }
}

function deleteTask(taskName) {
  const isValid = taskName in list;
  if (isValid) {
    delete list[taskName]
  } else {
    return TASK_ERROR;
  }
}

function showList() {

}