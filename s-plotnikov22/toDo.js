const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  TO_DO: "To Do",
};

const PRIORITY = {
  LOW: "low",
  HIGH: "high",
};

const list = [
  {
    name: "create a post",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  { name: "test",
   status: STATUS.DONE, 
   priority: PRIORITY.HIGH },
];


function DeleteTask(task) {
  let nameTask = list.findIndex((item) => item.name == task);
  if (nameTask !== -1) {
    list.splice(nameTask, 1);
  } else {
    console.log("Такой задачи нет");
  }
}


function AddTask(newTask, newPriority) {
  list.push({ name: newTask, status: STATUS.TO_DO, priority: newPriority });
}


function chageStatus(task, newStatus) {
  let nameTask = list.find((item) => item.name == task);
  if (!nameTask) {
    console.log("Такой задачи нет");
  } else {
    nameTask.status = newStatus;
  }
}

function showList() {
  console.log(STATUS.DONE, ":");
  let flag = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == STATUS.DONE) {
      flag = true;
      console.log("\t" + list[i].name);
    }
  }
  if (!flag) {
    console.log("-");
  }

  console.log(STATUS.IN_PROGRESS, ":");
  let flag2 = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == STATUS.IN_PROGRESS) {
      flag2 = true;
      console.log("\t" + list[i].name);
    }
  }
  if (!flag2) {
    console.log("-");
  }

  console.log(STATUS.TO_DO, ":");
  let flag3 = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == STATUS.TO_DO) {
      flag3 = true;
      console.log("\t" + list[i].name);
    }
  }
  if (!flag3) {
    console.log("-");
  }
}

AddTask("разобрать массивы", "high");
AddTask("выпить чаю", "low");
chageStatus("test", "In progress");
chageStatus("разобрать массивы", "Done");
DeleteTask("create a post");
chageStatus("выпить чаю", "Done");
showList();