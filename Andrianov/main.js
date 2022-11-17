const highForm = document.querySelector('.highForm');
const lowForm = document.querySelector('.lowForm');

function lowAddTask() {
    const lowTask = document.querySelector('.lowTask').value;
    const low = document.querySelector('.low');

    let input = document.createElement('input');
    input.type = 'radio';
    input.className = 'task';
    input.name = 'task';

    let div = document.createElement('div');
    div.className = 'block';
    div.textContent = lowTask;

    let button = document.createElement('button');
    button.className = 'delBtn';
    button.textContent = '+';

    low.append(div);
    div.prepend(input);
    div.append(button);
}


function highAddTask() {
    const highTask = document.querySelector('.highTask').value;
    const high = document.querySelector('.high');

    let input = document.createElement('input');
    input.type = 'radio';
    input.className = 'task';
    input.name = 'task';

    let div = document.createElement('div');
    div.className = 'block';
    div.textContent = highTask;

    let button = document.createElement('button');
    button.className = 'delBtn';
    button.textContent = '+';

    high.append(div);
    div.prepend(input);
    div.append(button);
}

highForm.addEventListener('submit',(e) => {
    e.preventDefault();
});
lowForm.addEventListener('submit',(e) => {
    e.preventDefault();
});
highForm.addEventListener('submit', highAddTask);
lowForm.addEventListener('submit', lowAddTask);