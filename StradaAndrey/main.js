const status = {
   TO_DO: 'to do',
   IN_PROGRESS : 'in progress',
   DONE : 'done',
};

const list = {
   'To sleep' : 'to do',
};

function changeStatus(task, status) {
   for(let key in list){
      if(key === task){
         return list[task] = status;
      } else {
         return console.log(`нет такой задачи "${task}"`);
      }
   };
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

function showStatus() {

}

changeStatus('To sleeep', status.DONE);
addTask('To eat');
addTask('To eat');
addTask('To work');
addTask('To go for a walk');
console.log(list);
deleteTask('To eat'); 
console.log(list);









