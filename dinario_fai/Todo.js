const list = {
    "create a new practice task": "In Progress",
      "make a bed": "Done",
      "write a post": "To Do",
  };
  
  function changeStatus(task,status){
    for (let key in list){
      if (list[key] != status){
        list[task] = status;
      } 
    }
  };
  
  function addTask(task){
    list[task] = "To Do"
  };
  
  function deleteTask(task){
    delete list[task]
  };
  
  let item1=" ";
  let item2=" ";
  let item3=" ";
  function showList(obj){
    for(let key in obj){
      if(obj[key] == "To Do"){
        item1 += key;
      } else if (obj[key] == "In Progress"){
        item2 += key;
      } else if (obj[key] == "Done"){
        item3 += key;
      } 
    }
    if (item1 === " "){
      item1 += "-";
    }
    if (item2 === " "){
      item2 += "-";
    } 
    if (item3 === " "){
      item3 += "-";
    }
    console.log(`Todo:\n>${item1}\nIn progress:\n>${item2}\nDone:\n>${item3}`);
  }; 
  
  changeStatus("write a post", "Done");
  addTask("have a walk"); 
  deleteTask("make a bed"); 
  showList(list);

  