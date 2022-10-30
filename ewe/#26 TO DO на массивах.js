const errorLog = {
    messageUndefined: 'Ошибка в вводе задачи или такая задача отсутствует',
    messageDefined: 'Такая задача уже существует',
    messageNofined: 'Ошибка в статусе задачи',
  };
  
  const list = [ { name: 'create a post', status: 'In progress', priority: 'low'  }, 
    { name: 'test', status: 'Done', priority: 'high'  }, 
  
  ];
  
  function changeStatus(param1, param2) {
    if (list.find(item => item.name === param1)) {
      let indexOfList = list.find(item => item.name == param1);
      indexOfList.status = param2;
    } else {
      console.log(errorLog.messageUndefined);
    }
  
  }
  function changePriority(param1, param3) {
    if (list.find(item => item.name === param1)) {
      let indexOfList = list.find(item => item.name == param1);
      indexOfList.priority = param3;
    } else {
      console.log(errorLog.messageUndefined);
    }
  
  }
  
  function addTask(param1, param2, param3) {
    if ((list.find(item => item.name === param1)) === undefined) {
      list.push({name: param1, status: param2, priority: param3});
    } else {
      console.log(errorLog.messageDefined);
    }
  
  
  }
  
  function deleteTask(param1) {
    indexOfList = list.findIndex(item => item.name === param1);
    list.splice(indexOfList, 1);
    
  }
  
  function showList() {
  
    
    console.log("ToDo:");
  
    for(let key of list)
    {
        if(key.status === "To Do")
            console.log("\t",`"${key.name}" с приоритетом "${key.priority}"`);       
    }
  
    console.log("\nIn Progress:");
  
    for(let key of list)
    {
        if(key.status === "In progress")
            console.log("\t",`"${key.name}" с приоритетом "${key.priority}"`);       
    }
  
    console.log("\nDone:");
  
    for(let key of list)
    {
        if(key.status === "Done")
            console.log("\t",`"${key.name}" с приоритетом "${key.priority}"`);       
    } 
    
  
  }
  
  
  showList();
  
  