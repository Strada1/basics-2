const statuses = {
  TODO: "To Do",
  INPROGRESS: "In Progress",
  DONE: "Done",
};

const priorities = {
  LOW: "low",
  HIGH: "high",
};

const list = [
  { name: "create a post", status: "In Progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

const changeStatus = (task, status, priority = priorities.LOW) => {
  const myTask = list.find((taskFind) => taskFind.name === task);
  if (myTask) {
    myTask.name = task;
    myTask.status = status;
    myTask.priority = priority;
  } else {
    return "error,there is no this task";
  }
};

const addTask = (
  task,
  status = statuses.INPROGRESS,
  priority = priorities.LOW
) => {
  const myTask = list.find((taskFind) => taskFind.name === task);
  if (myTask) return "error,we already have this task";
  else {
    list.push({ name: task, status: status, priority: priority });
  }
};

const deleteTask = (task) => {
  const myTaskIndex = list.findIndex((taskFind) => taskFind.name === task);
  if (myTaskIndex === -1) return "error,we have no this task";
  else {
    list.splice(myTaskIndex, 1);
  }
};

const showList = () => {
  for (let key in statuses) {
    const filtredArr = list.filter((a) => a.status === statuses[key]);
    console.log(`${statuses[key]}:`);
    if (filtredArr.length > 0) {
      filtredArr.forEach((element) => {
        console.log(`\t${element.name}`);
      });
    } else {
      console.log("\t-");
    }
  }
};

addTask("Go for a walk");
changeStatus("test", statuses.INPROGRESS, priorities.LOW);
addTask("sleeping");
deleteTask("create a post");
showList();
