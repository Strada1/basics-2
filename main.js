

const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To do",
};

function showList() {
    console.log("Done:");
    for(let key in list){
        if(list[key] === "Done"){
            console.log(`    "${key}"`);
        }
    }
    console.log("In Progress:");
    for(let key in list){
        if(list[key] === "In Progress"){
            console.log(`    "${key}"`);
        }
    }
    console.log("Todo:");
    for(let key in list){
        if(list[key] === "To do"){
            console.log(`    "${key}"`);
        }
    }
}

showList();
 function addTask(task){
    list[task] = "To do";
    return list;
 }
 addTask("have a walk");
 addTask("go to the cinema");
 
 showList();

function changeStatus(task, status){
   list[task] = status;
   return list;
}
changeStatus("go to the cinema", "Done");
changeStatus("have a walk", "Done");
showList();

function deleteTask(task){
    delete list[task];
    return list;
}
deleteTask("have a walk");
showList();