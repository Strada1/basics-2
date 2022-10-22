"use struct"

const list = {
    "Выполнить практическое задание":"Получено",
    "Постирать вещи":"Получено",
    
    
}

    
function toDoPractice()
{
    const toDo = "Получено";
    const InProgress = "Процесс"
    const done = "Готово";

    

    function addTasks()
    {
        return list["Купить молока"] = "Получено",list["Купить дрон"] = "Готово";
    }
    function changeStatus()
    {
         return list["Постирать вещи"] = "Процесс",list["Выполнить практическое задание"] = "Процесс";
    }
    function deleteTask()
    {
         return delete list["Купить дрон"];
    }
    addTasks();
    changeStatus();
    deleteTask();


        function showList()
        {   
            for(let key in list)
        {
            let secondTaskes = key;

            function showTodo()
            {
                if (toDo.indexOf("Получено") + 1)
            {
                return console.log(`Todo:
        "${secondTaskes}"`);
            }
            }
showTodo();


            function showInProgress()
            {
                if (InProgress.indexOf("Процесс") + 1)
            {
                return console.log(`InProgress:
        "${secondTaskes}"`);
            }
            }
showInProgress();

            function showDone()
            {
                if (done.indexOf("Готово") + 1)
            {
                return console.log(`Done:
        -`);
            }
            }
 showDone();           
        }

        
        
    }
    showList();
    
   
}

toDoPractice();

 




