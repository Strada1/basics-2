const STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};

const DASH = "-";

const list = [
  { name: "create a post", status: "In Progress", priority: "low" },
  { name: "write a post", status: "Done", priority: "high" },
  { name: "drink water", status: "To Do", priority: "low" },
];

function changeStatus(taskName, STATUS, PRIORITY) {
  let index = list.findIndex((task) => task.name === taskName);
  list[index].status = STATUS;
  list[index].priority = PRIORITY;
}

function addTask(taskName) {
  list.push({ name: taskName, status: STATUS.TODO, priority: PRIORITY.LOW });
}

function deleteTask(taskName) {
  let index = list.findIndex((task) => task.name === taskName);

  list.splice(index);
}

function showList() {
  let checkTask = {
    taskCountTodo: false,
    taskCountInProgress: false,
    taskCountDone: false,
  };

  console.log("Todo:");
  list.forEach((task) => {
    if (task.status === STATUS.TODO) {
      console.log(`\t "${task.name}",`);
      checkTask.taskCountTodo = true;
    }
  });

  if (checkTask.taskCountTodo == false) {
    console.log(`\t ${DASH}`);
  }

  console.log("In Progress: ");
  list.forEach((task) => {
    if (task.status === STATUS.IN_PROGRESS) {
      console.log(`\t "${task.name}",`);
      checkTask.taskCountInProgress = true;
    }
  });
  if (checkTask.taskCountInProgress == false) {
    console.log(`\t ${DASH}`);
  }

  console.log("Done: ");
  list.forEach((task) => {
    if (task.status === STATUS.DONE) {
      console.log(`\t "${task}",`);
      checkTask.taskCountDone = true;
    }
  });
  if (checkTask.taskCountDone == false) {
    console.log(`\t ${DASH}`);
  }
}

addTask("create todo list");
deleteTask("create todo list");
addTask("create a branch on Github");
changeStatus("create a branch on Github", STATUS.IN_PROGRESS, PRIORITY.HIGH);
changeStatus("write a post", STATUS.IN_PROGRESS, PRIORITY.LOW);

showList();
