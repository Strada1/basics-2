const STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "low",
  MIDDLE: "middle",
  HIGH: "high",
};

const list = [
  { name: "create a post", status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
  { name: "test", status: STATUS.DONE, priority: PRIORITY.HIGH },
];

function addTask(name, priorityValue) {
  list.push({ name, status: STATUS.TODO, priority: priorityValue });
}

function changeStatus(name, statusValue) {
  let nameIndex = list.findIndex((item) => item.name === name);
  if (nameIndex === -1) return;
  list[nameIndex].status = statusValue;
}

function deleteTask(name) {
  let nameIndex = list.findIndex((item) => item.name === name);
  if (nameIndex === -1) return;
  list.splice(nameIndex, 1);
}

function showList() {
  const TODO2 = [];
  const IN_PROGRESS2 = [];
  const DONE2 = [];

  list.forEach(function (item) {
    if (item.status === STATUS.TODO) {
      TODO2.push(item);
    }
    if (item.status === STATUS.IN_PROGRESS) {
      IN_PROGRESS2.push(item);
    }
    if (item.status === STATUS.DONE) {
      DONE2.push(item);
    }
  });

  if (TODO2.length === 0) {
    TODO2.push({name: '-'});
  }
  if (IN_PROGRESS2.length === 0) {
    IN_PROGRESS2.push({name: '-'});
  }
  if (DONE2.length === 0) {
    DONE2.push({name: '-'});
  }

  console.log(STATUS.TODO + ':');
  TODO2.forEach((item) => console.log("  " + item.name));
  console.log(STATUS.IN_PROGRESS + ':');
  IN_PROGRESS2.forEach((item) => console.log("  " + item.name));
  console.log(STATUS.DONE + ':');
  DONE2.forEach((item) => console.log("  " + item.name));
}

addTask("Сделать туду на массивах", PRIORITY.HIGH);
addTask("task 1", PRIORITY.LOW);
addTask("task 2", PRIORITY.LOW);
addTask("task 3", PRIORITY.LOW);
addTask("task 4", PRIORITY.LOW);
addTask("task 5", PRIORITY.LOW);
addTask("task 6", PRIORITY.LOW);
changeStatus("create a post", STATUS.DONE);
deleteTask("test");

showList();