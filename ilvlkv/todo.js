const list = {};
const toDo = {};
const done = {};
const inProgress = {};

let toDoList;
let inProgressList;
let doneList;

function addTask(task) {
  return (list[task] = null);
}

function changeStatus(task, status) {
  return (list[task] = String(status));
}

function deleteTask(task) {
  delete list[task];
}

function sortByToDo() {
  for (let key in list) {
    if (list[key] == "To Do") {
      return (toDo[key] = "toDo");
    }
  }
}

function sortByInProgress() {
  for (let key in list) {
    if (list[key] == "In Progress") {
      return (inProgress[key] = "inProgress");
    }
  }
}

function sortByDone() {
  for (let key in list) {
    if (list[key] == "Done") {
      return (done[key] = "done");
    }
  }
}

function getToDoList() {
  for (let key in toDo) {
    return (toDoList = `To Do:\n\t ${key}`);
  }
  return (toDoList = `To Do:\n\t -`);
}

function getInProgressList() {
  for (let key in inProgress) {
    return (inProgressList = `In Progress:\n\t ${key}`);
  }
  return (inProgressList = `In Progress:\n\t -`);
}

function getDoneList() {
  for (let key in done) {
    return (doneList = `Done:\n\t ${key}`);
  }
  return (doneList = `Done:\n\t -`);
}

function showList() {
  console.log(toDoList);
  console.log(inProgressList);
  console.log(doneList);
}

addTask("create a new practice task");
addTask("make a bed");
addTask("write a post");

changeStatus("create a new practice task", "In Progress");
changeStatus("make a bed", "Done");
changeStatus("write a post", "To Do");

deleteTask("make a bed");

sortByToDo();
sortByInProgress();
sortByDone();

getToDoList();
getInProgressList();
getDoneList();

showList();
