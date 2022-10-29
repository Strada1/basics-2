const Status = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done',
}

const Priority = {
    Low: 'Low',
    Middle: 'Middle',
    High: 'High',
}

function CheckStatusTask(selectedStatus)
{
    if (selectedStatus === false)
    {
        console.log('-');
    }
}

function CreateElementForArray(task,status,priority)
{
    return {
        task: task,
        status: status,
        priority: priority,
    }
}

function AddElementArray(task, status,priority)
{
    myArray.push(CreateElementForArray(task, status, priority));
}

function DeleteElementArray(currentTask)
{
    for (let i = 0; i < myArray.length; i++)
    {
        if(myArray[i].task === currentTask)
        {
            myArray.splice(i,1);
        }
    }
}

function ChangeStatus(currentTask, newStatus)
{
    for (let i = 0; i < myArray.length; i++)
    {
        if(myArray[i].task === currentTask)
        {
            switch (newStatus)
            {
                case Status.Done:
                    myArray[i].status = Status.Done;
                    break;
                case Status.InProgress:
                    myArray[i].status = Status.InProgress;
                    break;
                case Status.ToDo:
                    myArray[i].status = Status.ToDo;
                    break;
                default:
                    console.log('Такого статуса нет!');
            }
        }
    }
}

function ShowToDo()
{
    console.log(Status.ToDo, '\t')
    let flagToDo = false;
    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[i].status === Status.ToDo)
        {
            console.log(myArray[i].task);
            flagToDo = true;
        }
    }
    CheckStatusTask(flagToDo);
    console.log('\n');

    console.log(Status.InProgress, '\t')
    let flagInProgress = false;
    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[i].status === Status.InProgress)
        {
            console.log(myArray[i].task);
            flagInProgress = true;
        }
    }
    CheckStatusTask(flagInProgress);

    console.log('\n');

    console.log(Status.Done, '\t');
    let flagDone = false;
    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[i].status === Status.Done)
        {
            console.log(myArray[i].task, ',');
            flagDone = true;
        }
    }
    CheckStatusTask(flagDone);
}

let myArray = [];

let myTask1 = AddElementArray('Write a post', 'To Do', 'High');
let myTask2 = AddElementArray('Done homework', 'In Progress', 'High');
let myTask3 = AddElementArray('Eat', 'In Progress', 'High');
let myTask4 = AddElementArray('Wash my room', 'To Do', 'High');
let myTask5 = AddElementArray('Cooking a chicken', 'In Progress', 'High');
ShowToDo();

DeleteElementArray('Write a post');
ChangeStatus('Done homework', 'Done');
ShowToDo();