const STATUSES = {
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
    status: STATUSES.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  { name: "test", status: STATUSES.DONE, priority: PRIORITY.HIGH },
];

//  Удаление задачи=================================================
function DeleteTask(task) {
  let nameTask = list.findIndex((item) => item.name == task);
  if (nameTask !== -1) {
    list.splice(nameTask, 1);
  } else {
    console.log("Данной задачи нет в списке!");
  }
}

//  Добавление задачи=====================================================
function AddTask(newTask, newPriority) {
  list.push({ name: newTask, status: STATUSES.TO_DO, priority: newPriority });
}

// Изменение статуса задачи==================================================
function chageStatus(task, newStatus) {
  let nameTask = list.find((item) => item.name == task);
  if (!nameTask) {
    console.log("Такой задачи нет");
  } else {
    nameTask.status = newStatus;
  }
}

function showList() {
  console.log(STATUSES.DONE, ":");
  let flag = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == STATUSES.DONE) {
      flag = true;
      console.log("\t" + list[i].name);
    }
  }
  if (!flag) {
    console.log("-");
  }

  console.log(STATUSES.IN_PROGRESS, ":");
  let flag2 = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == STATUSES.IN_PROGRESS) {
      flag2 = true;
      console.log("\t" + list[i].name);
    }
  }
  if (!flag2) {
    console.log("-");
  }

  console.log(STATUSES.TO_DO, ":");
  let flag3 = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].status == STATUSES.TO_DO) {
      flag3 = true;
      console.log("\t" + list[i].name);
    }
  }
  if (!flag3) {
    console.log("-");
  }
}

AddTask("покормить собаку", "high");
AddTask("вынести мусор", "low");
AddTask("supermarket", "low");
AddTask("отремонтировать машину", "high");
chageStatus("test", "In progress");
chageStatus("вынести мусор", "Done");
DeleteTask("create a post");
chageStatus("покормить собаку", "Done");
showList();
