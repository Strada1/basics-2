const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};

/*я думала по поводу того чтобы засунть их в объект но потом подумала блин а зачем... 
поэтому просто добавила им возможность выбрать объект ну вдруг будет НЕСКОЛЬКО листов*/

function changeStatus(taskName, status, obj) {
    if (taskName in obj) {
        obj[taskName] = status;
    } else {
        console.log('Нет такого дела бездельник');
    }
    
};

function addTask (taskName, obj, status = 'Еще не начали') {
    if (taskName in obj) {
        console.log('такая таска уже есть')
    } else {
        obj[taskName] = status;
    };
};

function deleteTask (taskName, obj) {
    if (taskName in obj) {
        delete obj[taskName]
    } else {
        console.log('нет такой таски')
    }
};

function showList (obj) {

    let toDoTasks = 'Todo:';
    let doneTasks = 'Done:';
    let progressTasks = 'In Progress:';
    let otherTasks = 'Other:';

    for(let key in obj) {
        if (obj[key] === 'To Do') {

            toDoTasks += `\n	"${key}",`;

        } else if (obj[key] === 'Done') {

            doneTasks += `\n	"${key}",`;

        } else if (obj[key] === 'In Progress') {

            progressTasks += `\n	"${key}",`;

        } else {
            otherTasks += `\n	"${key}",`;
        };

    };

    return `${toDoTasks}\n${doneTasks}\n${progressTasks}\n${otherTasks}`
};

changeStatus("create a new practice task", 'In Progress', list);
addTask('постирать', list);
addTask('попить водички', list, 'Regular');
changeStatus("постирать", 'чета лень', list);
deleteTask('постирать', list);
addTask('не забыть комитнуть все', list, 'To Do');


console.log(showList(list));


