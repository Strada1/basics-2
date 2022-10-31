const list = [ 
  { 
    name: 'create a post', 
    status: 'In progress', 
    priority: 'low',
  }, 
  {
    name: 'test', 
    status: 'Done', 
    priority: 'high',
  },
];

const STATUS = {
  TODO: 'To do',
  IN_PROGRES: 'In progres',
  DONE: 'Done',
};

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
};

const ERRORS = {
  TASK_EXISTS: 'Такой таск уже есть',
  TASK_NO: 'Такого таска нету',
}

// Add task
function addTask(name, status = STATUS.TODO, priority = PRIORITY.LOW) {
  let taskIndex = list.findIndex(function(item){
    return item.name.toLowerCase() == name.toLowerCase();
  });

  if( taskIndex == -1 ){
    list.push({ name, status, priority });
  } else {
    console.log(ERRORS.TASK_EXISTS);
  }
}

//Change task
function changeStatus(name, status) {
  let taskIndex = list.findIndex(function(item){
    return item.name.toLowerCase() == name.toLowerCase();
  });
  if( taskIndex != -1 ){
    list[taskIndex].status = status;
  } else {
    console.log(ERRORS.TASK_NO);
  }
}

//Delete task
function deleteTask(name) {
  let taskIndex = list.findIndex(function(item){
    return item.name.toLowerCase() == name.toLowerCase();
  });
  if( taskIndex != -1 ){
    list.splice(taskIndex, 1);
  } else {
    console.log(ERRORS.TASK_NO);
  }
}

// Show task
function showList() {
  for(let index in STATUS ){
    console.log(`${STATUS[index]} :`);
    let statusName = '';
    for( let i = 0; i < list.length; i++ ){
      if( list[i].status == STATUS[index] ){
        statusName += `  ${list[i].name}\n`;
      }
    }
    if( statusName != '' ){
      console.log(`${statusName}`);
    } else {
      console.log('  -');
    }
  }

}


addTask('create a new post', STATUS.DONE, PRIORITY.HIGH);
addTask('task 1', STATUS.IN_PROGRES, PRIORITY.HIGH);
addTask('task 2', STATUS.IN_PROGRES, PRIORITY.LOW);
addTask('task 3', STATUS.TODO, PRIORITY.LOW);
changeStatus('Create a post', STATUS.DONE);
deleteTask('Create a post');

showList();