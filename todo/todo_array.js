const STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};
const TASK_EXISTS = "already exists, please delete it first.";

const DASH = "-";

let list = [
  { name: "create a post", status: "In Progress", priority: "low" },
  { name: "write a post", status: "Done", priority: "high" },
  { name: "drink water", status: "To Do", priority: "low" },
];

function changeStatus(taskName, STATUS) {
  let task = list.find((task) => task.name === taskName);
  task.status = STATUS;
}

function changePriority(taskName, PRIORITY) {
  let task = list.find((task) => task.name === taskName);
  task.priority = PRIORITY;
}

function addTask(taskName) {
  let task = list.find((task) => task.name === taskName);
  if (task) {
    console.log(`"${taskName}" ${TASK_EXISTS}`);
  } else {
    list.push({
      name: taskName,
      status: STATUS.TODO,
      priority: PRIORITY.LOW,
    });
  }
}

function deleteTask(taskName) {
  list = list.filter((task) => task.name !== taskName);
}

function showList() {
  let checkTask = {
    doesExistTodo: false,
    doesExistInProgress: false,
    doesExistDone: false,
  };
  // TODO:
  console.log("Todo:");
  list.forEach((task) => {
    if (task.status === STATUS.TODO) {
      console.log(`\t "${task.name}",`);
      checkTask.doesExistTodo = true;
    }
  });

  if (checkTask.doesExistTodo == false) {
    console.log(`\t ${DASH}`);
  }
  // IN_PROGRESS:
  console.log("In Progress: ");
  list.forEach((task) => {
    if (task.status === STATUS.IN_PROGRESS) {
      console.log(`\t "${task.name}",`);
      checkTask.doesExistInProgress = true;
    }
  });
  if (checkTask.doesExistInProgress == false) {
    console.log(`\t ${DASH}`);
  }
  // DONE:
  console.log("Done: ");
  list.forEach((task) => {
    if (task.status === STATUS.DONE) {
      console.log(`\t "${task}",`);
      checkTask.doesExistDone = true;
    }
  });
  if (checkTask.doesExistDone == false) {
    console.log(`\t ${DASH}`);
  }
}

addTask("create todo list");
deleteTask("create todo list");
addTask("drink water");
changeStatus("drink water", STATUS.IN_PROGRESS);
addTask("create a branch on Github");
changePriority("create a branch on Github", PRIORITY.HIGH);
changeStatus("write a post", STATUS.IN_PROGRESS);
changePriority("write a post", PRIORITY.LOW);

showList();
