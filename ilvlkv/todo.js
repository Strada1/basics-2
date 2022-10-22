const list = {};

function addTask(task) {
  return (list[task] = null);
}

function changeStatus(task, status) {
  return (list[task] = String(status));
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  console.log("To do:");
  for (let key in list) {
    if (list[key] == "To Do") {
      console.log("     " + key);
    }
  }
  console.log("In Progress:");
  for (key in list) {
    if (list[key] == "In Progress") {
      console.log("     " + key);
    }
  }
  console.log("Done:");
  for (key in list) {
    if (list[key] == "Done") {
      console.log("     " + key);
    }
  }
}

addTask("create a new practice task");
addTask("make a bed");
addTask("write a post");

changeStatus("create a new practice task", "In Progress");
changeStatus("make a bed", "Done");
changeStatus("write a post", "To Do");

addTask("buy some food");
changeStatus("buy some food", "Done");
changeStatus("buy some food", "To Do");

deleteTask("buy some food");

showList();
