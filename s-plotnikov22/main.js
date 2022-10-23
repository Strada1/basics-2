const list = {
  "make a breakfast": "done",
  "go to job": "in progress",
  "learn JS": "to do",
}

const STATUS = {
  toDo: "to do",
  inProgress: "in progress",
  done: "done",
}

function changeStatus(task, status) {
  if (task in list) {
    list[task] = status
  }
}

function addTask(newTask){
  if (!(newTask in list)) {
    list[newTask] = "to do"
  }
}

function deleteTask(task){
  if(task in list) {
    delete list[task]
  }
}

function ShowList(){
  console.log(STATUS["toDo"])
  for(key in list){
    if(list[key] == STATUS["toDo"]){
      console.log("    " + key)
    }
  }

  console.log(STATUS["inProgress"])
  for(key in list){
    if(list[key] == STATUS["inProgress"]){
      console.log("    " + key)
    }
  }

  console.log(STATUS["done"])
  for(key in list){
    if(list[key] == STATUS["done"]){
      console.log("    " + key)
    }
  }
}

addTask("go to gym");
changeStatus("learn JS", "done" );
deleteTask("go to job");
ShowList();