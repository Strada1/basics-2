const STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
}

const PRIORITY = {
    LOW: "low",
    HIGH: "high",
}

const list = [];

function addTask(e) {
    e.preventDefault();
    let inputs = document.getElementsByName('in');
    let taskName = "";
    let taskPriority = "";
    for (let i of inputs) {
        if (i.value !== "") {
            taskName = i.value;
            taskPriority = (i.classList[0] === 'block__high' ? PRIORITY.HIGH : PRIORITY.LOW);
        }
    }

    if (list.find(item => item.name === taskName)) {
        alert(`Задача "${taskName}" уже есть в списке дел!`);
        return;
    }
    if (taskName.trim().length === 0) {
        alert(`Имя задачи не может быть пустым!`);
        return;
    }
    list.push( {
        name: taskName, 
        status: STATUS.TO_DO, 
        priority: taskPriority} );
    console.log(`Задача "${taskName}" добавлена в список дел!`);

    let div = document.createElement('div');
    div.className = (taskPriority === PRIORITY.HIGH ? 'block__high case open' : 'block__low case open');
    div.className = 'block__high case open';
    //div.setAttribute('data-task', true);
    div.innerHTML = `
    <label class="lable">
        <input type="checkbox" class="case-checkbox">
        <span class="checker"></span>
    </label>
    <p class="text">${taskName}</p>
    <button class="closebutton"><p class="close">+</p></button>
    `;
    if (taskPriority === PRIORITY.HIGH) {
        document.querySelector('.block__high').append(div);
    } else {
        document.querySelector('.block__low').append(div);
    }
    inputs.forEach(i => i.value = "");

    //console.log(list);
}
document.addEventListener('submit', addTask);


function deleteTask(e) {
    if (e.target.className != 'close') return;  
    let taskCase = e.target.closest('.case');
    let taskName = taskCase.getElementsByClassName('text')[0].textContent;
    taskCase.remove();

    const index = list.findIndex(item => item.name === taskName)
    if (index === -1) {
        console.log(`Задачи "${taskName}" нет в списке дел!`);
        return;
    }
    list.splice(index, 1);
    console.log(`Задача "${taskName}" удалена!`);

    //console.log(list);
    
}
document.addEventListener('click', deleteTask);


function changeStatus(e) {
    if (e.target.className != 'case-checkbox') return;
    let taskCase = e.target.closest('.case');
    let taskName = taskCase.getElementsByClassName('text')[0].textContent;
    let taskStatus;
    if (taskCase.getElementsByClassName('case-checkbox')[0].checked) {
        taskCase.style.backgroundColor = '#F4F4F4';
        taskStatus = STATUS.DONE;
    } else {
        taskCase.style.backgroundColor = '#FFF';
        taskStatus = STATUS.TO_DO;
    }

    const index = list.findIndex(item => item.name === taskName)
    if (index === -1) {
        console.log(`Задачи "${taskName}" нет в списке дел!`);
        return;
    }
    for (let key in STATUS) {
        if (STATUS[key] === taskStatus) {
            list[index].status = taskStatus;
            console.log(`Задаче "${taskName}" задан статус "${taskStatus}"!`);

            //console.log(list);

            return;
        }    
    }
    console.log(`Не допустимый статус "${taskStatus}"!`);   
}
document.addEventListener('click', changeStatus);