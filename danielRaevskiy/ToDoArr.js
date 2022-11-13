const list = [
{ name: 'create a post', status: 'In progress', priority: 'low' }, 
{ name: 'test', status: 'Done', priority: 'high' },
];


function changeStatus(situation, index) {
    list[index].status = situation;
}

function changePriority(situation, index) {
    list[index].priority = situation;
}

function addTask(task) {
    list.push({name: task, status: 'In progress', priority: 'low'});
}

function deleteTask(name) {
    let task = list.find(item => item.name === name);
    list.splice(list.indexOf(list[task]), 1);
}

function showList() {
    
    const doneList = list.filter(item => item.status === 'Done');
    const progressList = list.filter(item => item.status === 'In progress');

    let str = '';
    let str1 = '';
    doneList.forEach((el) => {
        str += el.name + "" + ',';
    })
    console.log('Done: ' + str);

    
    progressList.forEach((el) => {
        str1 += el.name + "" + ',';
    })
    console.log('In progress: ' + str1);
}


addTask('die');
addTask('die');
addTask('die');
addTask('die');
deleteTask('die')
deleteTask('die')
deleteTask('die')
deleteTask('die')
showList();

//Если вы хотите чтобы несоклько задач выводились под одним статусом, то можно сначала их добавить в отдельный массив и потом выводить его элементы. 

