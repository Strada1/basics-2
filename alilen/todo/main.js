const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(key, meaning) {
    list[key] = meaning;
}

function addTask (key) {
    list[key] = 'To Do';
}

function deleteTask (key) {
    delete list[key];
}

function showList (){
    console.log('Todo:');
    let isEmpty = true;

    for (let key in list) {
        if (list[key] == 'To Do') {
            console.log(`    "${key}"`);
            isEmpty = false;
        }
    }
    if (isEmpty) console.log('    -');

    console.log('In Progress:');
    isEmpty = true;

    for (let key in list) {
        if (list[key] == 'In Progress') {
            console.log(`    "${key}"`);
            isEmpty = false;
        }
    }
    if (isEmpty) console.log('    -');

    console.log('Done:');
    isEmpty = true;

    for (let key in list) {
        if (list[key] == 'Done') {
            console.log(`    "${key}"`);
            isEmpty = false;
        }
    }
    if (isEmpty) console.log('    -');

}


deleteTask ('make a bed')
showList();

/* 
console.log(list['write a post']);
changeStatus("write a post", "Done");
console.log(list['write a post']);
addTask('have a walk')
deleteTask('have a walk') */