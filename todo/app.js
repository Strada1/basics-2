const list = {
  one: "In progress",
  two: "Done",
  three: "To do",
};

function changeStatus(todo, status, obj) {
  obj[todo] = status;
}

function addTask(todo, status, obj) {
  obj[todo] = status;
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
    if (list[key] === "In Progress") {
      console.log(`\t${key}`);
      count3++;
    }
  }
  if (count3 == 0) {
    console.log(`\t${"-"}`);
  }
}

deleteTask("one", list);
changeStatus("two", "In progress", list);
addTask("six", "In Progress", list);
addTask("four", "To do", list);
showList(list);
