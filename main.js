const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

const DEFAULT_STATUS = "To Do";

function addTask(taskName) {

}

function changeStatus(taskName, taskStatus) {
  const isValid = list[taskName] != undefined;
  if (isValid) {
    list[taskName] = taskStatus;
  } else {
    return 'Task not found'
  }
}

function deleteTask(taskName) {
  const isValid = list[taskName] != undefined;
  if (isValid) {
    delete list[taskName]
  } else {
    return 'Task not found'
  }
}

function showList() {

}