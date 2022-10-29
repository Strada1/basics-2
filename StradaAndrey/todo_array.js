const STATUS = {
   TODO:'to do',
   INPROGRESS:'in progress',
   DONE:'done',
}
const PRIORITY = {
   LOW:'low',
   HIGH:'high',
}
const list = [{  name:'create "to do list"', status:STATUS.TODO, priority:PRIORITY.HIGH,}];

function changeStatus(task,newStatus){
   let element = list.find(function(object){
      return object.name === task});

   if (element === undefined){
      console.log(`Задача ${task} отсутствует в списке`)
   }else {
      element.status = newStatus;
   };
   
}

function addTask(task,priority){
   let element = list.find(function(object){
      return object.name === task;
   })

   if (element === undefined){
      list.push({name:task, status:STATUS.TODO, priority:priority})
   }else {
      console.log(`Задача '${task}' уже существует.`)
   }
   
}

function deleteTask(task){
   let element = list.find(function(object){
      return object.name === task;
   })
   if (element === undefined){
      console.log(`Задача '${task}' отсутствует в списке.`)
   }else {
      list.splice(list.indexOf(element),1)
   }
}

function showList(){
   let checkToDo = false;
   let checkInProgress = false; // ПОЧЕМУ, ЕСЛИ ЯВНО НЕ ПРИСВОИТЬ ПЕРЕМЕННОЙ ЗНАЧЕНИЕ FALSE, В 71 СТРОКЕ ПРОВЕРКА НА FALSE НЕ ПРОХОДИТ. ВЕДЬ ПУСТАЯ ПЕРЕМЕННАЯ В BOOLEAN - ЭТО FALSE
   let checkDone = false;

   console.log('ToDo:')
   list.forEach(function(object){
      if(object.status === STATUS.TODO){
         checkToDo = true;
         console.log(`\t${object.name} , ${object.priority}`);
      }
   })
   if(checkToDo == false){
      console.log('\t-');
   }

   console.log('In Progress:')
   list.forEach(function(object){
      if(object.status === STATUS.INPROGRESS){
         checkInProgress = true;
         console.log(`\t${object.name} , ${object.priority}`)
      }
   })
   if(checkInProgress == false){
      console.log('\t-');
   }

   console.log('Done:')
   list.forEach(function(object){
      if(object.status === STATUS.DONE){
         checkDone = true;
         console.log(`\t${object.name}`);
      }
   })
   if(checkDone == false){
      console.log('\t-')
   }
   //--------------------------------------------------------------------------ВТОРОЙ ВАРИАНТ ЛУЧШЕ НЕ ИСПОЛЬЗОВАТЬ
   // let resultToDo = '';
   // let resultInProgress = '';
   // let resultDone = '';
   // list.forEach(function(item){
   //    if(item.status === STATUS.TODO){
   //       resultToDo += `${item.name}, ${item.priority} \n\t`
   //    }else if(item.status === STATUS.INPROGRESS){
   //       resultInProgress += `${item.name}, ${item.priority} \n\t`
   //    }else if(item.status === STATUS.DONE){
   //       resultDone += `${item.name} \n\t`
   //    }
   // })
   // if(resultToDo === ''){
   //    resultToDo = '-'
   // }else if(resultInProgress === ''){
   //    resultInProgress = '-'
   // }else if(resultDone === ''){
   //    resultDone = '-'
   // }
   // console.log(`ToDo:\n\t${resultToDo}`)
   // console.log(`In Progress:\n\t${resultInProgress}`)
   // console.log(`Done:\n\t${resultDone}`)
   
}

changeStatus('create "to do list"',STATUS.DONE);
addTask('create "to do list"',PRIORITY.HIGH);
addTask('to relax',PRIORITY.HIGH);
addTask('to eat peanuts',PRIORITY.LOW);
addTask('to sleep',PRIORITY.HIGH);
addTask('take a shower',PRIORITY.HIGH);
deleteTask('to eat peanuts');
changeStatus('to sleep',STATUS.DONE);
showList()

console.log(list)

