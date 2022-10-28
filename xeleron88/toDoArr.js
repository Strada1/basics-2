const STATUS = {
  DONE: "done",
  IN_PROGRESS: "in progress",
  TODO: "to do",
};

const PROIORITY = {
  HIGH: "high",
  LOW: "low",
};

const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "done", priority: "high" },
];

function changeStatus(
  todolist,
  key,
  status = STATUS.TODO,
  priority = PROIORITY.LOW
) {
  const indexKey = todolist.findIndex((keyFind) => keyFind.name === key);
  if (indexKey === -1) return console.log("Key does not exist");
  todolist[indexKey].status = status;
  todolist[indexKey].priority = priority;
}

function addTask(
  todolist,
  key,
  status = STATUS.TODO,
  priority = PROIORITY.LOW
) {
  if (key.length < 1 || key === undefined || todolist === undefined) {
    return console.log("Invalid input DATA");
  }
  todolist.push({ name: key, status, priority });
}

function deleteTask(todolist, key) {
  const indexKey = todolist.findIndex((keyFind) => keyFind.name === key);
  if (indexKey === -1) return console.log("Key does not exist");
  todolist.splice(indexKey, 1);
}



addTask(list, "test2", "done", "low");
deleteTask(list, "test");
console.log(list);
