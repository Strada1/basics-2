const dash = "-";
const list = {
  one: "In Progress",
  two: "Done",
  three: "To Do",
};

const STATUS = {
  "IN PROGRESS": "In Progress",
  TODO: "To Do",
  DONE: "Done",
};

function changeStatus(value, stat) {
  list[value] = stat;
}

function addTask(value) {
  list[value] = STATUS["IN PROGRESS"];
}

function deleteTask(value) {
  delete list[value];
}

function showList() {
  console.log(STATUS.TODO, ":");
  let flag = false;
  for (let key in list) {
    if (list[key] === STATUS.TODO) {
      flag = true;
      console.log("\t", key);
    }
  }
  if (flag == false) {
    console.log("\t", dash);
  }

  console.log(STATUS["IN PROGRESS"], ":");
  let flag2 = false;
  for (let key in list) {
    if (list[key] === STATUS["IN PROGRESS"]) {
      flag2 = true;
      console.log("\t", key);
    }
  }
  if (flag == false) {
    console.log("\t", dash);
  }
  console.log(STATUS.DONE, ":");
  let flag3 = false;
  for (let key in list) {
    if (list[key] === STATUS.DONE) {
      flag3 = true;
      console.log("\t", key);
    }
  }
  if (flag3 == false) {
    console.log("\t", dash);
  }
  console.log("\n");
}

// До изменений
showList();

changeStatus("one", STATUS.TODO);
addTask("four");
addTask("five");
deleteTask("two");

// После изменений
showList();
