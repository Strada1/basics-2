
const highForm = document.querySelector('.highForm');
const lowForm = document.querySelector('.lowForm');
let highTask = document.querySelector('.highTask');
let lowTask = document.querySelector('.lowTask');
let addBtn = document.querySelectorAll('.addBtn');


const STATUS = {
    DONE: 'Done',
    TODO: 'Todo',
};
const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
};

let list = [];

 function highAddTask() {
    if(highTask.value !== ''){
        let newList = {
            name:highTask.value,
            status: STATUS.TODO,
            priority: PRIORITY.HIGH,
        };
        list.push(newList);
        console.log(list);
       
    }
    render();
  }
  function lowAddTask() {
    if(lowTask.value !== ''){
        let newList = {
            name:lowTask.value,
            status: STATUS.TODO,
            priority: PRIORITY.LOW,
        };
        list.push(newList);
        console.log(list);
        
    }
    render();
  }

 function getElement(element, index, task, status) {

        let label = document.createElement("label");
        label.className = "task";
        label.textContent = element.name;
        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "task";
        if(status === STATUS.DONE){
            input.checked = true;
        }
        input.addEventListener('change', (event) => {
            changeStatus(event, task)
        })
        let div = document.createElement("div");
        div.className = "block";
        let delBtn= document.createElement("button");
        delBtn.className = "delBtn";
        delBtn.textContent = "+";
        delBtn.id = index;

        div.append(input);
        div.append(label);
        div.append(delBtn);
        task.append(div);

    
        delBtn.addEventListener("click", function () {
            list.splice(delBtn.id, 1);
            render();      
        });
  }
  function changeStatus(event, task){
        list.forEach((item) => {
           if(item.name === task && event.target.checked) {
                item.status = STATUS.TODO;
            }
        })
        render();
  }


function render() {
    document.querySelector(".high").innerHTML = "";
    document.querySelector(".low").innerHTML = "";
  
    list.forEach((element, index) => {
      if (element.priority == PRIORITY.HIGH) {
        const task = document.querySelector(".high");
        getElement(element, index, task);
      }
      if (element.priority == PRIORITY.LOW) {
        const task = document.querySelector(".low");

        getElement(element, index, task);
      }
    });
    console.log()
}
highForm.addEventListener('submit', (e) => {

    e.preventDefault();
});
lowForm.addEventListener('submit', (e) => {

    e.preventDefault();
});
highForm.addEventListener('submit', highAddTask);
lowForm.addEventListener('submit', lowAddTask);
highForm.addEventListener('submit', render);
lowForm.addEventListener('submit', render);