// 19 Практика ToDo

const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(paramTaskName, progressTaskStatus) {
  if (list[paramTaskName] !== undefined) {
    list[paramTaskName] = progressTaskStatus;
  } else {
    console.log('Невозможно изменить не существующую задачу');
  }
}

function addTask(paramTaskAdd) {
  list[paramTaskAdd] = "To Do";
}

function deleteTask(paramTaskDeleted) {
  delete list[paramTaskDeleted];
}

function showList() {

  console.log("ToDo:");

  for(let key in list)
  {
      if(list[key] == "To Do")
          console.log("\t", key);       
  }

  console.log("\nIn Progress:");

  for(let key in list)
  {
      if(list[key] == "In Progress")
          console.log("\t", key);       
  }

  console.log("\nDone:");

  for(let key in list)
  {
      if(list[key] == "Done")
          console.log("\t", key);       
  }  
  
}


changeStatus("write a post", "Done");
addTask('have a walk');
deleteTask('have a walk');
addTask('run out JS');

showList();