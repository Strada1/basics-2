const list = {
    'Приготовить завтрак': 'In Progress',
    'Прочитать почту': 'Todo',
    'Навести порядок': 'Done',
  };
  
  function changeStatus(task, status) {
    if (task in list) {
      list[task] == status;
    }
  }
  
  function addTask(task) {
    if (list[task] ) {
      list[task] ;
    } 
  }
  
  function deleteTask(task) {
    delete list[task];
  }
  
  function showList(task) {
    console.log('Todo:');
    for (let task in list) {
      if (list[task] === 'To Do') {
        console.log( '-', task);
      }
    }
  
    console.log('In Progress:');
    for (let task in list) {
      if (list[task] === 'In Progress') {
        console.log(task);
      }
    }
    console.log('Done:');{
      if (list[task] === 'Done') {
        console.log( task);
      }
    }
   
}

  addTask('Купить подарки','In Progress');
  changeStatus('Купить подарки', 'In Progress');
  deleteTask('Навести порядок')
  showList('Todo','In Progress','Done')