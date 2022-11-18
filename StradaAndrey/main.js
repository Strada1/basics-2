const form = document.querySelectorAll('form');
form.forEach((object)=> object.addEventListener('submit',(event)=> event.preventDefault()));

const addTaskHighButton = document.getElementById('add_task_high');
const addTaskLowButton = document.getElementById('add_task_low');
const inputHigh = document.querySelector('input.high');
const inputLow = document.querySelector('input.low');

function addTaskHigh(){
      const newTask = document.createElement('div');
      newTask.className = 'text-box';
      form[0].after(newTask);
   
      const input = document.createElement('input');
      input.className = "checkbox";
      input.setAttribute('type','checkbox');
      newTask.prepend(input);
   
      const taskText = document.createElement('p');
      taskText.textContent = inputHigh.value;
      newTask.append(taskText);
   
      const button = document.createElement('button');
      button.classList = 'btn delete-btn';
      button.textContent = '╂'
      newTask.append(button);
}
function addTaskLow(){
      const newTask = document.createElement('div');
      newTask.className = 'text-box';
      form[1].after(newTask);
   
      const input = document.createElement('input');
      input.className = "checkbox";
      input.setAttribute('type','checkbox');
      newTask.prepend(input);
   
      const taskText = document.createElement('p');
      taskText.textContent = inputLow.value
      newTask.append(taskText);
   
      const button = document.createElement('button');
      button.className = 'btn delete-btn';
      button.textContent = '╂'
      newTask.append(button);
}

addTaskHighButton.addEventListener('click',addTaskHigh)
addTaskLowButton.addEventListener('click',addTaskLow)