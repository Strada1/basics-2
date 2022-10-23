const status = {
   TO_DO: 'Todo',
   IN_PROGRESS : 'In progress',
   DONE : 'Done',
};

const list = {
   'To sleep' : 'Todo',
};

function changeStatus(task, status) {
   if(task in list){
      list[task] = status;
   } else {
      console.log(`нет такой задачи "${task}"`);
   }
}

function addTask(task){
   for (let key in list){
      if (key === task){
         console.log(`задача ${task} уже есть в списке. выберите другую`);
      } else {
         list[task] = status.TO_DO;
      }
   }
}

function deleteTask(task){
      if(task in list){
         delete list[task]; 
      } else {
         console.log(`задача ${task} отсутствует в списке. выберите другую`);
      }
}

function showList() {
   let todo = '';
   let in_progress = '';
   let done = '';
   for (let key in list){
      if (list[key] === status.TO_DO){
         todo += '\n\t'+ key;
      } else if(list[key] === status.IN_PROGRESS){
         in_progress += '\n\t'+ key;
      } else if(list[key] === status.DONE){
         done += '\n\t'+ key;
      }
   }

   if (todo == false){
      todo = '\n\t-';
   } else if(in_progress == false){
      in_progress = '\n\t-';
   } else if (done == false) {
      done = '\n\t-';
   }
   console.log(`${status.TO_DO}:${todo}`)
   console.log(`${status.IN_PROGRESS}:${in_progress}`)
   console.log(`${status.DONE}:${done}`)
}

changeStatus('To sleeep', status.DONE);
addTask('To eat');
addTask('To eat');
addTask('To work');
addTask('To go for a walk');
addTask('To run');
deleteTask('To eat'); 
changeStatus('To work', status.DONE);
changeStatus('To run', status.IN_PROGRESS);
console.log(list);
showList()









