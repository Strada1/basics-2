let inprogress = [];
let done = [];
let todo = [];
const STATUS = {
  TODO: "Todo",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};
const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Todo", priority: "high" },
];

list.filter((item) => {
  if (item.status === STATUS.IN_PROGRESS) {
    inprogress.push(item.name);
  }
  if (item.status === STATUS.DONE) {
    done.push(item.name);
  }
  if (item.status === STATUS.TODO) {
    todo.push(item.name);
  }
});

function changeStatus(task, statusName) {
  let index = list.findIndex((item) => item.name == task);
  if (index < 0) {
    console.log("Task not in list");
  } else {
    list[index].status = statusName;
  }
}

function addTask(task) {
  let index = list.findIndex((item) => item.name == task);
  if (index < 0) {
    list.push({ name: task, status: STATUS.DONE, priority: "low" });
  } else {
    console.log("Task in list");
  }
}
function deleteTask(task) {
  let index = list.findIndex((item) => item.name == task);
  if (index == -1) {
    console.log("Task not in list");
  } else {
    list.splice(index);
    console.log(list);
  }
}

function showList() {
  console.log(`${STATUS.TODO}:`);
  let todoResult = list.forEach((item) => {
    if (item.status === STATUS.TODO) {
      console.log(` -${item.name}`);
    }
  });
  console.log(`${STATUS.DONE}:`);
  let doneResult = list.forEach((item) => {
    if (item.status === STATUS.DONE) {
      console.log(` -${item.name}`);
    }
  });
  console.log(`${STATUS.IN_PROGRESS}:`);
  let inprogressResult = list.forEach((item) => {
    if (item.status === STATUS.IN_PROGRESS) {
      console.log(` -${item.name}`);
    }
  });
}

showList();
