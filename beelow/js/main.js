const UI_ELEMENTS = {
    ADD_TASK_HIGHT: document.querySelector('.button_add_task_hight'),
    ADD_TASK_LOW: document.querySelector('.button_add_task_low'),
    INPUT_TEXT_HIGHT: document.querySelector('.input_task_hight'),
    INPUT_TEXT_LOW: document.querySelector('.input_task_low'),
    INPUT_FORM_HIGHT: document.querySelector('.input_form_hight'),
    INPUT_FORM_LOW: document.querySelector('.input_form_low'),
    PUSH_PRIORITY_HIGHT: document.querySelector('.hight_task_container'),
    PUSH_PRIORITY_LOW: document.querySelector('.low_task_container'),
};

const ERROR = {
    NOT_TASK: "Ошибка: Нет такой задачи",
    YES_TASK: "Ошибка: Такая задача уже есть",
    NOT_STATUS: "Ошибка: Такой статус не доступен",
    NOT_PRIORITY: "Ошибка: Такой приоритет не доступен",
    STATUS_NAME: "Ошибка: Недопустимое название задачи",
};

const CHECK = {
    CHANGE_DONE: "Задача выполнена",
    CHANGE_DEFAULT: "Задача не выполнена",
    CHANGE_PRIORITY: "Приоритет изминен",
    ADD_TASK_MASSIVE: "[MASSIVE] - Добавлена новая задача",
    DELETE_TASK_MASSIVE: "[MASSIVE] - Задача уадалена",
    IS_RENDER: '[RENDER] - Complete'
};

const PRIORITY = {
    HIGHT: 'Hight',
    LOW: 'Low',
};

const STATUS = {
    DONE: "Done",
    TO_DO: "To Do",
};

const taskList = [];

const DEFAULT_STATUS = STATUS.TO_DO;


function addTask(newTask, priorityTask) {
    let findName = taskList.findIndex(function (findName) {
        return findName.name === newTask;
    });
    if (findName >= 0) {
        console.log(ERROR.YES_TASK);
        return;
    } else if (newTask === "") {
        console.log(ERROR.STATUS_NAME);
    } else {
        taskList.push({
            name: newTask,
            status: DEFAULT_STATUS,
            priority: priorityTask,
        });
        console.log(CHECK.ADD_TASK_MASSIVE);
        console.log(taskList);
    }
    render()
}


function deleteTask(idTask) {
    taskList.splice(idTask, 1);
    console.log(CHECK.DELETE_TASK_MASSIVE);
    render()
}


function changeStatus(idTask) {
    if (taskList[idTask].status == STATUS.TO_DO) {
        return taskList[idTask].status = STATUS.DONE
    }
    else if (taskList[idTask].status == STATUS.DONE) {
        return taskList[idTask].status = STATUS.TO_DO
    }
    console.log(CHECK.CHANGE_DONE);
    render()
}


function pushTaskUi(task, index, taskRender) {
    let divTask = document.createElement('div');
    let nameTask = document.createElement('label');
    let checkStatus = document.createElement('input');
    let deleteButton = document.createElement('div');

    divTask.className = 'task';
    divTask.id = index;
    checkStatus.className = 'checkbox';
    checkStatus.type = 'checkbox';
    deleteButton.className = 'button_delete_task'
    deleteButton.textContent = '×'

    divTask.append(nameTask);
    nameTask.append(checkStatus);
    nameTask.append(task.name);
    divTask.append(deleteButton);
    taskRender.append(divTask);

    deleteButton.addEventListener("click", function () {
        deleteTask(divTask.id);
    });

    checkStatus.addEventListener("change", function () {
        changeStatus(divTask.id)
    });

    if (task.status == STATUS.DONE) {
        checkStatus.setAttribute("checked", true)
    };
}


function render() {
    UI_ELEMENTS.PUSH_PRIORITY_HIGHT.innerHTML = "";
    UI_ELEMENTS.PUSH_PRIORITY_LOW.innerHTML = "";

    taskList.forEach(function (task, index) {
        if (task.priority === PRIORITY.HIGHT) {
            const taskRender = UI_ELEMENTS.PUSH_PRIORITY_HIGHT;
            pushTaskUi(task, index, taskRender);
            UI_ELEMENTS.INPUT_FORM_HIGHT.reset();
        }
        else if (task.priority === PRIORITY.LOW) {
            const taskRender = UI_ELEMENTS.PUSH_PRIORITY_LOW;
            pushTaskUi(task, index, taskRender);
            UI_ELEMENTS.INPUT_FORM_LOW.reset();
        }
    })
}


UI_ELEMENTS.INPUT_FORM_HIGHT.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(UI_ELEMENTS.INPUT_TEXT_HIGHT.value, PRIORITY.HIGHT);
});

UI_ELEMENTS.INPUT_FORM_LOW.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(UI_ELEMENTS.INPUT_TEXT_LOW.value, PRIORITY.LOW);
});

