const tasks = [];

const toDoList = [];
const inProgressList = [];
const doneList = [];

function addTask(name) {
  return tasks.push((obj = { name: name, status: null, priority: null }));
}

function changeTaskStatus(name, status) {
  for (let task of tasks) {
    if (task.name == name) {
      return (task.status = status);
    }
  }
}

function setTaskPriority(name, priority) {
  for (let task of tasks) {
    if (task.name == name) {
      switch (priority) {
        case "High":
          return (task.priority = 1);
          break;
        case "Middle":
          return (task.priority = 2);
          break;
        case "Low":
          return (task.priority = 3);
          break;
        default:
          return (task.priority = "Unknown status");
          break;
      }
    }
  }
}

function deleteTask(name) {
  let index = tasks.findIndex((task) => task.name == name);
  return tasks.splice(index, 1);
}

function sortByStatus() {
  for (let task of tasks) {
    if (task.status == "ToDo") {
      toDoList.push(task);
    }
  }
  for (let task of tasks) {
    if (task.status == "InProgress") {
      inProgressList.push(task);
    }
  }
  for (let task of tasks) {
    if (task.status == "Done") {
      doneList.push(task);
    }
  }
}

function getFormattedArrays() {
  function compare(a, b) {
    if (a.priority > b.priority) return 1;
    if (a.priority == b.priority) return 0;
    if (a.priority < b.priority) return -1;
  }
  for (let item of toDoList) {
    delete item.status;
  }
  toDoList.sort(compare);
  for (item of toDoList) {
    delete item.priority;
  }
  for (let item of inProgressList) {
    delete item.status;
  }
  inProgressList.sort(compare);
  for (item of inProgressList) {
    delete item.priority;
  }
  for (let item of doneList) {
    delete item.status;
  }
  doneList.sort(compare);
  for (item of doneList) {
    delete item.priority;
  }
}

function showList() {
  console.log(`To Do:`);
  toDoList.forEach((item) => {
    console.log(`   ${item.name}`);
  });
  if (toDoList.length == 0) {
    console.log(`   -`);
  }
  console.log(`\nIn Progress:`);
  inProgressList.forEach((item) => {
    console.log(`   ${item.name}`);
  });
  if (inProgressList.length == 0) {
    console.log(`   -`);
  }
  console.log(`\nDone:`);
  doneList.forEach((item) => {
    console.log(`   ${item.name}`);
  });
  if (doneList.length == 0) {
    console.log(`   -`);
  }
}

addTask("Test a game");
addTask("Write a status");
addTask("Take a breath");
addTask("Make money");
addTask("Complete strada's task");
addTask("Wash some dishes");

changeTaskStatus("Test a game", "Done");
changeTaskStatus("Write a status", "ToDo");
changeTaskStatus("Take a breath", "InProgress");
changeTaskStatus("Make money", "InProgress");
changeTaskStatus("Complete strada's task", "InProgress");
changeTaskStatus("Wash some dishes", "ToDo");

setTaskPriority("Test a game", "Low");
setTaskPriority("Write a status", "Middle");
setTaskPriority("Take a breath", "High");
setTaskPriority("Make money", "Low");
setTaskPriority("Complete strada's task", "Middle");
setTaskPriority("Wash some dishes", "High");

deleteTask("Test a game");

sortByStatus();
getFormattedArrays();

showList();
