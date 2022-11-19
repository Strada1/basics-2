import { STATUS,PRIORITY} from "./const.js";

const formInfo = document.querySelectorAll("form");
formInfo.forEach(element => {
    element.addEventListener('submit', function (event) {
        event.preventDefault();
        let taskName = event.target.firstElementChild;
        addToList(taskName, element)
        event.target.reset();
    })
})
let list = []

let index = 1;
function addToList(taskName, element) {
    if (taskName.value !== "") {
        list.push({ name:taskName.value, status:STATUS.TODO, priority:element.parentElement.className,id:`${index++}`});
        render()
    }
}

function deleteTask(taskId) {
    list = list.filter(item => item.id !== taskId);
    render()
}

function changeStatus(taskId, newInput) {
    const listTask = list.find(item => item.id === taskId);
    if (newInput.checked === true) {
        listTask.status = STATUS.DONE;
    } else if (newInput.checked === false) {
        listTask.status = STATUS.TODO;
    }
    render()
}

function render() {
    const items = document.querySelectorAll(".list-task");
    for (let item of items) {
        item.remove();
    }
    for (let elem of list) {
        const newUl = document.createElement("li")
        newUl.classList.add("list-task")

        const newInput = document.createElement("input")
        newInput.type = "checkbox";
        newInput.classList.add("task-name")
        newInput.id = `task-${elem.id}`

        newInput.addEventListener("change", function () {
            changeStatus(elem.id, newInput);
        });
        if(elem.status === STATUS.DONE){
            newUl.style.background = "#a5a5a5"
            newInput.setAttribute("checked","checked")
        }
        const newLabel = document.createElement("label")
        newLabel.textContent = elem.name

        const newBtn = document.createElement("button")
        newBtn.classList.add("task-name-button")
        newBtn.textContent = "+"
        newBtn.addEventListener("click", function () {
            deleteTask(elem.id);
        });
        newUl.prepend(newInput,newLabel,newBtn);
        const highPlace = document.querySelector(".high__task-list");
        const lowPlace = document.querySelector(".low__task-list");
        if (elem.priority === PRIORITY.HIGH) {
            highPlace.prepend(newUl)
            console.log(list)
        } else if (elem.priority === PRIORITY.LOW) {
            lowPlace.prepend(newUl)
        }
    }
};
