let todoArr = [
    {title: "do a job",
    id: 1,
    done: false
    }, 
    {title: "do nothing",
    id: 2,
    done: true,
    }, 

];

function addTask (title){
    const newTask = {
        title: title,
        id: 100,
        done: false}

    todoArr.push(newTask);
    showList(`добавлена задача ${title}`);
}

function deleteTask (title){
    todoArr = todoArr.filter((task)=> (task.title !==title));
showList(`удалена задача ${title}`);

}

function showList (prop){
    console.log(prop);
    
    console.log('Todo:');
    todoArr.map((task) => {
        if (!task.done){
        console.log(task.title)}});
        console.log('Done:');
    todoArr.map((task) => {
        if (task.done){
            console.log(task.title)}});



}

function changeStatus(title){
    todoArr.map((task) => {
        if (title == task.title & task.done === false){
            task.done = true;
            
        }else if (task.title == title & task.done === true) {
            task.done = false;}

    });
}



showList("первоначаольный список");

addTask ("go to fly a drone!");


deleteTask('do nothing');


console.log('меняем статус');
changeStatus('go to fly a drone!');

showList("итоговый список:");




