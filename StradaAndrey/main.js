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
         return console.log(`задача ${task} уже есть в списке. выберите другую`);
      } else {
         return list[task] = status.TO_DO;
      }
   }
}

function deleteTask(task){
   for (let key in list){
      console.log(key); //ПОКАЗЫВАЕТ , ЧТО KEY ЕСТЬ ТОЛЬКО TO SLEEP, ХОТЯ Я УЖЕ ДОБАВИЛ TO EAT И В КОНСОЛИ ОНО ЕСТЬ.
      if(key === task){
         return delete list[task];
      } else {
         return console.log(`задача ${task} отсутствует в списке. выберите другую`);
      }
   }
}


changeStatus('To sleeep', status.DONE);
addTask('To eat');
console.log(list);
addTask('To eat'); // ПОЧЕМУ НЕ ПРОХОДИТ ПРОВЕРКУ? 
deleteTask('To eat'); // ПОЧЕМУ НЕ ПРОХОДИТ ПРОВЕРКУ? 
console.log(list);









