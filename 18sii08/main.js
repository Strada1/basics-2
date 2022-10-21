const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "Done",
};

function changeStatus(task, status) {
  if (task in list) {
    list[task] = status;
  } else {
    console.log("Not ToDo");
  }
}

function addTask(task) {
  if (list[task] === undefined) {
    list[task] = undefined;
  } else {
    console.log("Task in list");
  }
}

function deleteTask(task) {
  if (list[task] === undefined) {
    console.log("Task not in list");
  }
  delete list[task];
}

function showList() {
  console.log("Todo:");
  for (let task in list) {
    if (list[task] === "To Do") {
      console.log(" -", task);
    }
  }

  console.log("In Progress:");
  for (let task in list) {
    if (list[task] === "In Progress") {
      console.log(" -", task);
    }
  }
  console.log("Done:");
  for (let task in list) {
    if (list[task] === "Done") {
      console.log(" -", task);
    }
  }
  console.log("No status:");
  for (let task in list) {
    if (list[task] === undefined) {
      console.log(" -", task);
    }
  }
}

addTask("make a be");

showList();
