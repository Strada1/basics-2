const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(task, status) {
  if (task in list) {
    list[task] = status;
  }
}

function addTask(task) {
  list[task] = undefined;
}

function deleteTask(task) {
  if (task in list) {
    delete list[task];
  }
}

function showList() {
  console.log(`To Do:`);
  for (let key in list) {
    if (list[key] == "To Do") {
      console.log(`\t"${key}"`);
    }
  }
  console.log(`Done:`);
  for (let key in list) {
    if (list[key] == "Done") {
      console.log(`\t"${key}"`);
    }
  }
  console.log(`In Progress:`);
  for (let key in list) {
    if (list[key] == "In Progress") {
      console.log(`\t"${key}"`);
    }
  }
}

addTask("do Strada");
changeStatus("do Strada", "To Do");
changeStatus("write a post", "Done");
showList();
