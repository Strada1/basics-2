const STATUS = {
    Todo: 'Todo',
    InProgress: 'In Progress',
    Done: 'Done',
}
const PRIORITY = {
    Low: 'Low',
    Middle: 'Middle',
    High: 'High',
}

let newTask = {name: 'Buy a new car', status: STATUS.InProgress, priority: PRIORITY.High}; //Новый объект - задача со статусом и приоритетом
let numberOfDeletingTask = 2;
let countOfDeletingTask  = 1;


const list = [ 
    { name: 'create a new task', status: STATUS.InProgress, priority: PRIORITY.Low}, 
    {name: 'Test', status: STATUS.Done, priority: PRIORITY.High}] //Массив объектов

function changeStatus (task, newStatus) {
    
}

function addTask (newTask) {
    list.splice(list.length-1,0,newTask);
}//функция добавления таска в конец списка (так как это логично)

function deleteTask (numberOfDeletingTask) {
    list.splice(numberOfDeletingTask);
}// функция удаления таска из любого места массива

function findStatus (neededStatus) {
        let checkValue = 0;
        for (let item of list) {
            if (item.status == neededStatus ){
                checkValue += 1;
                console.log('    ' + item.name);
            }}
        if (checkValue == 0) {
            console.log("   -");
        }
        

    }

function showList () {
    console.log(STATUS.Todo + ":");
    findStatus('Todo');
    
    console.log(STATUS.InProgress + ':');
    findStatus('In Progress');
    
    console.log (STATUS.Done + ':');
    findStatus('Done');
     
}

// addTask(newTask);
// findStatus(STATUS.InProgress);
showList();
// deleteTask(numberOfDeletingTask< countOfDeletingTask);
console.table (list);
//console.log( list);