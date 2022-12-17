let idNumber = 0;
const STATUS = {
    DONE: 'Done',
    TO_DO: 'To do', 
};

const PRIORITY = {
    HIGH: 'High',
    LOW: 'Low',
};

const ELEMENTS = {
    FORMHIGH: document.querySelector('.formHigh'),
    FORMLOW: document.querySelector('.formLow'),
    TEXTINPUTHIGH: document.querySelector('.text_input'),
    TEXTINPUTLOW: document.querySelector('.text_input_low'),
    HIGHLIST: document.querySelector('#high'),
    LOWLIST: document.querySelector('#low'),
};

ELEMENTS.FORMHIGH.addEventListener('submit', function(event) {
    event.preventDefault();
    addToArr(ELEMENTS.TEXTINPUTHIGH.value, PRIORITY.HIGH, );
    render();
    this.reset();
});

ELEMENTS.FORMLOW.addEventListener('submit', function(event) {
    event.preventDefault();
    addToArr(ELEMENTS.TEXTINPUTLOW.value, PRIORITY.LOW);
    render();
    this.reset();
});

function render() {
    ELEMENTS.HIGHLIST.innerHTML = '';
    ELEMENTS.LOWLIST.innerHTML = '';

    list.forEach(function(item) {
        if(item.priority === PRIORITY.HIGH) {
            createHighElement(item.name, item.time);
        } else if(item.priority === PRIORITY.LOW) {
            createLowElement(item.name, item.time);
        }
    });
    storage.setToLocal(list);
};


const storage = {
    setToLocal: function(arr) {
        let res = JSON.stringify(arr);
        localStorage.setItem('task', res);
    },
    getFromLocal: function() {
        let res = JSON.parse(localStorage.getItem('task'));
        return res
    },
};

let list = storage.getFromLocal();

if(storage.getFromLocal() !== null) {
    list = storage.getFromLocal();
    render();
} else {
    list = [];
}

function addToArr(taskName, prior, time) {
    if(taskName === '') {
        return;
    }
    let newTask = new Task(taskName, prior, time);
    list.push(newTask);
    storage.setToLocal(list);
}

function Task(taskName, prior) {
    this.name = taskName;
    this.priority = prior;
    this.status = STATUS.TO_DO;
    this.time = getDate();
}

function deleteFromArr(taskName) {
    let res = list.findIndex(function(item) {
        return item.name == taskName;
    })
    list.splice(res, 1);
    storage.setToLocal(list);
    render()
}

function getIdNumber() {
    return idNumber++
}

function getDate() {
    let date = new Date();
    let day = addZeroToNumber(date.getDate());
    let month = addZeroToNumber(date.getMonth() + 1);
    let year = date.getFullYear();
    let hour = addZeroToNumber(date.getHours());
    let min = addZeroToNumber(date.getMinutes());
    return `${day}/${month}/${year}  ${hour}:${min}`
}

function addZeroToNumber(value) {
    return (value < 10) ? '0' + value : value
}

function createHighElement(taskName, time) {
    let id = getIdNumber();
        let newEl = document.createElement('div');
        newEl.className = "task_input task_input_label task";
            
        let label = document.createElement('label');
        label.className = 'label';
        label.setAttribute("for", `task${id}`);
        label.textContent = taskName;

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = `task${id}`;
        checkBox.className = 'checkbox';

        let checkBtn = document.createElement('button');
        checkBtn.className = 'btn';
        checkBtn.textContent = '+';

        newEl.prepend(checkBtn);
        newEl.prepend(createDateEl(time));
        newEl.prepend(label);
        newEl.prepend(checkBox);
        
        ELEMENTS.HIGHLIST.append(newEl);

        checkBtn.addEventListener('click', function() {
            deleteFromArr(taskName)
        })
}
function createLowElement(taskName, time) {
        let id = getIdNumber();
        let newEl = document.createElement('div');
        newEl.className = "task_input task_input_label task";
            
        let label = document.createElement('label');
        label.className = 'label';
        label.setAttribute("for", `task${id}`);
        label.textContent = taskName;

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = `task${id}`;
        checkBox.className = 'checkbox';
        
        checkBox.addEventListener('click', function(event) {
            event.target.checked;
        })
        
        let checkBtn = document.createElement('button');
        checkBtn.className = 'btn';
        checkBtn.textContent = '+';
    
        newEl.prepend(checkBtn);
        newEl.prepend(createDateEl(time));
        newEl.prepend(label);
        newEl.prepend(checkBox);

        ELEMENTS.LOWLIST.append(newEl);

        checkBtn.addEventListener('click', function() {
            deleteFromArr(taskName);
        })
}

function createDateEl(el) {
    let dateParagraph = document.createElement('div');
    dateParagraph.className = 'dateDiv';
    dateParagraph.textContent = el;
    return dateParagraph;
}




