const STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(task, STATUS) {
  list[task] = STATUS;
}

function addTask(task) {
  list[task] = STATUS.TODO;
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  let checkTask = {
    toDoCount: false,
    inProgressCount: false,
    doneCount: false,
  };

  console.log("Todo: ");
  for (let task in list) {
    if (list[task] === STATUS.TODO) {
      console.log(`\t "${task}",`);
      checkTask.toDoCount = true;
    }
  }
  if (checkTask.toDoCount == false) {
    console.log(`\t -`);
  }
  console.log("In Progress: ");
  for (let task in list) {
    if (list[task] === STATUS.IN_PROGRESS) {
      console.log(`\t "${task}",`);
      checkTask.inProgressCount = true;
    }
  }
  if (checkTask.inProgressCount == false) {
    console.log(`\t -`);
  }
  console.log("Done: ");
  for (let task in list) {
    if (list[task] === STATUS.DONE) {
      console.log(`\t "${task}",`);
      checkTask.doneCount = true;
    }
  }
  if (checkTask.doneCount == false) {
    console.log(`\t -`);
  }
}

changeStatus("create a new practice task", STATUS.TODO);
addTask("create todo list");
changeStatus("write a post", STATUS.IN_PROGRESS);
deleteTask("create todo list");
addTask("create a branch on Github");
deleteTask("make a bed");
showList();
