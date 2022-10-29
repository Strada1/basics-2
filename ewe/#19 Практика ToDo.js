const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};
const errorLog = {
  messageUndefined: 'Ошибка в вводе задачи или такая задача отсутствует',
  messageDefined: 'Такая задача уже существует',
  messageNofined: 'Ошибка в статусе задачи',
};

function changeStatus(param1, param2) {
  if (list[param1] === undefined) {
    return console.log(errorLog.messageUndefined);
  } else { 
    list[param1] = param2;
  }
}

function addTask(params) {
  if (list[params] === undefined) {
    list[params] = "To Do";
  } else {
    return console.log(errorLog.messageDefined);
  }
}


function deleteTask(params) {
  if (list[params] === undefined) {
    return console.log(errorLog.messageUndefined);
  } else {
    delete list[params];
  }
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

showList();