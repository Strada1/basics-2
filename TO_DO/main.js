const STATUSES = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  TO_DO: "To Do",
};

const list = {
  "create a new practice task": STATUSES.TO_DO,
  "make a bed": STATUSES.IN_PROGRESS,
  "write a post": STATUSES.TO_DO,
};

// Удаление задачи=======================================
function deleteTask(task) {
  delete list[task];
}

// Добавление задачи======================================
function addTask(task) {
  list[task] = STATUSES.TO_DO;
}

// Изменение статуса задачи===============================
function chageStatus(task, statuses) {
  list[task] = statuses;
}

function showList() {
  console.log(STATUSES.DONE, ":");
  let flag = false;
  for (let key in list) {
    if (list[key] === STATUSES.DONE) {
      flag = true;
      console.log("\t" + key);
    }
  }
  if (!flag) {
    console.log("-");
  }

  console.log(STATUSES.TO_DO, ":");
  let flag2 = false;
  for (let key in list) {
    if (list[key] == STATUSES.TO_DO) {
      flag2 = true;
      console.log("\t" + key);
    }
  }
  if (!flag2) {
    console.log("-");
  }

  console.log(STATUSES.IN_PROGRESS, ":");
  let flag3 = false;
  for (let key in list) {
    if (list[key] == STATUSES.IN_PROGRESS) {
      flag3 = true;
      console.log("\t" + key);
    }
  }
  if (!flag3) {
    console.log("-");
  }
}

chageStatus("write a post", "Done");
addTask("supermarket");
chageStatus("supermarket", "In Progress");
deleteTask("create a new practice task");
showList();
