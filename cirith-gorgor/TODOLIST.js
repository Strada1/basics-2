const STATUS = {
  TODO: "To Do",
  INPROGRESS: "In Progress",
  DONE: "Done",
};

const list = {
  "create a new practice task": "In Progress",
  // "make a bed": "Done",
  "write a post": "To Do",
  "play on guitar": "To Do",
  "have a walk": "To Do",
  "to go to gym": "To Do",
  "boil the soup": "In Progress",
};

function changeStatus(goal, change) {
  if (goal == !change) {
    console.log(`Target "${goal}" cant be changed! Please, check your status`);
  } else {
    list[goal] = change;
    console.log(`Goal '${goal}' is changed to '${change}'`);
  }
}

function addTask(newTask, added = "") {
  list[newTask] = added;
  return `'${newTask}' added to your ToDo list`;
}

function deleteTask(delTask) {
  delete list[delTask];
  return `'${delTask}' deleted from your ToDo list`;
}

function showList() {
  console.log("Todo:\n");
  for (let key in list) {
    if (list[key] == STATUS.TODO) {
      console.log("\t" + key);
    }
  }
  console.log("In Progress:\n");
  for (let key in list) {
    if (list[key] == STATUS.INPROGRESS) {
      console.log("\t" + key);
    }
  }
  console.log("Done:\n");
  for (let key in list) {
    if (list[key] == STATUS.DONE) {
      return console.log("\t" + key);
    } else if (list[key] == !STATUS.DONE) {
      console.log("\t" + "-");
    }
  }
}
console.log(changeStatus("have a walk", STATUS.TODO));
console.log(addTask("to go to gym"));
console.log(deleteTask("finish my home-work"));
console.log(showList());
