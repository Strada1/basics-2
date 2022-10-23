const list = {
  one: "In progress",
  two: "Done",
  three: "To do",
};

const status_obj = {
  TODO: "To do",
  DONE: "Done",
  "IN PROGRESS": "In progress",
};

function changeStatus(todo, obj) {
  obj[todo] = status_obj["IN PROGRESS"];
}

function addTask(todo, obj) {
  obj[todo] = status_obj["IN PROGRESS"];
}

function deleteTask(todo, obj) {
  delete obj[todo];
}

function showList(obj) {
  console.log("Todo:");
  count1 = 0;
  for (let key in list) {
    if (list[key] === "To do") {
      console.log(`\t${key}`);
      count1++;
    }
  }
  if (count1 == 0) {
    console.log(`\t${"-"}`);
  }
  console.log("Done:");
  count2 = 0;
  for (let key in list) {
    if (list[key] === "Done") {
      console.log(`\t${key}`);
      count2++;
    }
  }
  if (count2 == 0) {
    console.log(`\t${"-"}`);
  }
  console.log("In Progress:");
  count3 = 0;
  for (let key in list) {
    if (list[key] === "In progress") {
      console.log(`\t${key}`);
      count3++;
    }
  }
  if (count3 == 0) {
    console.log(`\t${"-"}`);
  }
  console.log("\n");
}

// До изменение
showList();

deleteTask("one", list);
changeStatus("two", list);
addTask("six", list);
addTask("four", list);

// После изменение
showList(list);
