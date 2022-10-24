const STATUS = {
  TODO: "To do",
  IN_PROGRESS: "In Progress",
  DONE: "done",
};

const list = {
  "create a new practice task": "In Progress",
  "make a bad": "done",
  "write a post": "To do",
};

function changeStatus(key, status) {
  list[key] = status;
}

function addTask(task) {
  list[task] = STATUS.DONE;
}

function deleteTask(delTask) {
  delete list[delTask];
}

function showList() {
  console.log(STATUS["IN_PROGRESS"]);
  for (let key in list) {
    if (list[key] === STATUS["IN_PROGRESS"]) {
      console.log("  " + key);
    }
  }

  console.log(STATUS["TODO"]);
  for (let key in list) {
    if (list[key] === STATUS["TODO"]) {
      console.log("  " + key);
    }
  }

  console.log(STATUS["DONE"]);
  for (let key in list) {
    if (list[key] === STATUS["DONE"]) {
      console.log("  " + key);
    }
  }
}

addTask("sleep");
changeStatus("sleep", STATUS.TODO);
deleteTask();
showList();
