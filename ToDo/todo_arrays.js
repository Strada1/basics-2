const list = [
  {
    name: "create a new practice task",
    status: "In Progress",
    priority: "high",
  },
  { name: "make a bed", status: "Done", priority: "low" },
  { name: "write a post", status: "To Do", priority: "low" },
];

function changeStatus(task, newStatus) {
  if (list.find((item) => item.name === task)) {
    let index = list.indexOf(list.find((item) => item.name === task));
    list[index].status = newStatus;
  }
}

function changePriority(task, priorityVar) {
  if (list.find((item) => item.name === task)) {
    let index = list.indexOf(list.find((item) => item.name === task));
    list[index].priority = priorityVar;
  }
}

function addTask(task, newStatus, priorityVar) {
  list.push({ name: task, status: newStatus, priority: priorityVar });
}

function deleteTask(task) {
  if (list.find((item) => item.name === task)) {
    let index = list.indexOf(list.find((item) => item.name === task));
    list.splice(index, 1);
  }
}

function showList() {
  console.log("To Do: ");
  let taskToDo = list.filter((item) => item.status == "To Do");
  console.log(taskToDo);
  console.log("Done: ");
  let taskDone = list.filter((item) => item.status == "Done");
  console.log(taskDone);
  console.log("In Progress:");
  let taskInProgress = list.filter((item) => item.status == "In Progress");
  console.log(taskInProgress);
}

addTask("Do Strada", "To Do", "High");
changeStatus("write a post", "Done");
changePriority("write a post", "high");
deleteTask("make a bed");
showList();
