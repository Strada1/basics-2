const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(key, value) {
  list[key] = value;
}

function addTask(key) {
  list[key] = "To Do";
}

function deleteTask(key) {
  delete list[key];
}

function showList() {
  console.log("Todo: ");
  for (let key in list) {
    if (list[key] === "To Do") {
      console.log(`\t "${key}"`);
    }
  }
  console.log("In Progress: ");
  for (let key in list) {
    if (list[key] === "In Progress") {
      console.log(`\t "${key}"`);
    }
  }
  console.log("Done: ");
  for (let key in list) {
    if (list[key] === "Done") {
      console.log(`\t "${key}"`);
    } else {
      console.log("-");
    }
  }
}

changeStatus("create a new practice task", "To Do");
addTask("create todo list");
changeStatus("write a post", "In Progress");
deleteTask("create todo list");
addTask("create a branch on Github");
deleteTask("make a bed");
showList();
