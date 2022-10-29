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
  if (list.filter((item) => item.name === task)) {
    let index = list.indexOf(list.find((item) => item.name === task));
    let newlist = (list[index].status = newStatus);
  }
}

function changePriority(task, priorityVar) {
  if (list.find((item) => item.name === task)) {
    let index = list.indexOf(list.find((item) => item.name === task));
    newlist = list[index].priority = priorityVar;
  }
}

function addTask(task, newStatus, priorityVar) {
  newlist = list.push({ name: task, status: newStatus, priority: priorityVar });
}

function deleteTask(task) {
  newlist = list.filter((item) => item.name !== task);
  return newlist;
}

function showList() {
  console.log("To Do: ");
  let taskToDo = newlist.filter((item) => item.status == "To Do");
  console.log(taskToDo);
  console.log("Done: ");
  let taskDone = newlist.filter((item) => item.status == "Done");
  console.log(taskDone);
  console.log("In Progress:");
  let taskInProgress = newlist.filter((item) => item.status == "In Progress");
  console.log(taskInProgress);
}

addTask("Do Strada", "To Do", "High");
changeStatus("write a post", "Done");
changePriority("write a post", "high");
deleteTask("make a bed");
showList();
