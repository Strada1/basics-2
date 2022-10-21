const INPROGRESS = "In Progress";
const DONE = "Done";
const TODO = "To Do";
const DEFOLT = TODO;

const list = {
  "create a new practice task": INPROGRESS,
  "make a bed": DONE,
  "write a post": TODO,
};

function changeStatus(task, status){
  list[task] = status;
}

function deleteTask(task){
  delete list[task];
}

function addTask(nameTask){
  list[nameTask] = DEFOLT;
}

function showList(){
  console.log(TODO);
  for (let key in list) {
    if (list[key] == TODO){
      console.log(`   "${key}"`);
    }
  }
  console.log(INPROGRESS)
  for (let key in list) {
    if (list[key] == INPROGRESS){
      console.log(`   "${key}"`);
    }
  }
  console.log(DONE)
  for (let key in list) {
    if (list[key] == DONE){
      console.log(`   "${key}"`);
    }
  }
}

addTask("delete dota 2");
addTask("study in Strada");
changeStatus("delete dota 2", INPROGRESS);
changeStatus("delete dota 2", DONE);
changeStatus("study in Strada", INPROGRESS);
showList();