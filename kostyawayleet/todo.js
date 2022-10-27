const STATUS = {
   TODO: "To Do",
   DONE: "Done",
   INPROGRESS: "In Progress",
};

const list = {
   "write a post": "To Do",
   "make a bed": "Done",
   "create a new practice task": "In Progress",
};

function changeStatus(task, status) {
   let flag = false;
   if (task in list) {
      list[task] = status;
      flag = true;
   }
   return flag;
}

function addTask(newTask) {
   let flag = false;
   if (!(newTask in list)) {
      list[newTask] = STATUS.TODO;
      flag = true;
   }
   return flag;
}

function deleteTask(task) {
   let flag = false;
   if (task in list) {
      delete list[task];
      flag = true;
   }
   return flag;
}

function showList() {
   console.log(STATUS.TODO)
   let flagToDo = false;
   for (let task in list) {
      if (list[task] === STATUS.TODO) {
         console.log(`\t${task}`);
         flagToDo = true;
      }
   }
   if (flagToDo == false) {
      console.log('-');
   }
   console.log(STATUS.INPROGRESS)
   let flagProgress = false;
   for (let task in list) {
      if (list[task] === STATUS.INPROGRESS) {
         console.log(`\t${task}`);
         flagProgress = true;
      }
   }
   if (flagProgress == false) {
      console.log('-');
   }
   console.log(STATUS.DONE)
   let flagDone = false;
   for (let task in list) {
      if (list[task] === STATUS.DONE) {
         console.log(`\t${task}`);
         flagDone = true;
      }
   }
   if (flagDone == false) {
      console.log('-');
   }
}

addTask("buy an elephant");
deleteTask("make a bed");
changeStatus("create a new practice task", 'Done');
showList();