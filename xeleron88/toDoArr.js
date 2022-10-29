const STATUS = {
  TODO: "to do",
  IN_PROGRESS: "In progress",
  DONE: "done",
};

const PROIORITY = {
  HIGH: "high",
  LOW: "low",
};

const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "done", priority: "high" },
  { name: "test3", status: "In progress", priority: "high" },
  { name: "test5", status: "In progress", priority: "high" },
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

function showList(todolist) {
  for (const key in STATUS) {
    let result = [];
    console.log(STATUS[key].toUpperCase());
    todolist.map((item) => {
      if (item.status === STATUS[key]) {
        result.push(`\t${item.name}`);
      }
    });
    result = result.length === 0 ? `\t-` : result.join('\n');
    console.log(`${result}\n`);
  }
}

addTask(list, "test7", STATUS.DONE, PROIORITY.HIGH);
addTask(list, "test8", STATUS.DONE, PROIORITY.HIGH);
addTask(list, "test9");
deleteTask(list, "test");
changeStatus(list, "test7", STATUS.TODO)
showList(list);
