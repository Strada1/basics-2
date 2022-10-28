"use strict";



///Не стал менять, пишу по новой

    const listToDo = 
{
    "buy milk":"In Progress",
    "buy house":"Done",
    "write a post":"To Do",
};
    const arrayToDo = [];
        arrayToDo.push(listToDo);
    function addTasks()
 {
        return listToDo["buy a car"] = "In Progress",listToDo["go to home"] = "To Do";
 }
    function changeStatuss()
 {
        return listToDo["buy a car"] = "Done";
 }
    function deleteTask()
 {
        return delete listToDo["go to home"], delete listToDo["buy a car"];
        
 }
    function addObjectToArray()
{
        for(let key in listToDo)
    {
        if(listToDo[key] == "In Progress")
        {
         arrayToDo.InProgress = [{name:key , status: listToDo[key],priority:"high"}];
        }
        else if(listToDo[key] == "Done")
        {
        arrayToDo.Done = [{name:key , status: listToDo[key],priority:"complite"}];
        }
        else if(listToDo[key] == "To Do")
        {
         arrayToDo.ToDo = [{name:key , status: listToDo[key],priority:"received"}];
        }
        
    };
    console.log(arrayToDo)
}
 addTasks();
 changeStatuss();
 deleteTask();
 addObjectToArray();
 
 




