// ToDo
const STATUS = {
	// IN_PROGRESS: "In Progress",
	DONE: "Done",
	TODO: "To Do",
	// NOT_WANT: 'don`t want'
}

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low',
}


export let list = []

import {showError} from "./help.js"
import {findEl} from "./help.js"
import {findIn} from "./help.js"
import {searchPriority} from "./help.js"
import {searchPlace} from "./help.js"
import {searchName} from "./help.js"

let forms = Array.from(document.forms);
forms.forEach(el => {
	el.addEventListener("submit", function (e) {
		e.preventDefault()
		newTask(e.target)
	});
});

let todo = document.querySelector('.todo__block');
todo.addEventListener("click", todoClick)

function todoClick(e){
	let el = e.target
	if (el.closest('.-delet')) {
		deleteTask(el)
		showList(searchPlace(el))
	}
	if (el.closest(".todo__checkbox")) {
		changeStatus(el)
		showList(searchPlace(el))
	}
};

function newTask(forma) {
	let input = forma.querySelector('.todo__add')
	let name = input.value;
	if (!name) return
	input.value = ""
	addTask(name, searchPriority(forma))
	showList(searchPlace(forma))

}

function changeStatus(input) {
	let name = searchName(input)
	list[findIn(name)].status = input.checked ? STATUS.DONE : STATUS.TODO
}

function addTask(task, priority = PRIORITY.LOW, status = STATUS.TODO) {
	const point = findEl(task)
	if (point) {
		return showError("add")
	}
	
	list.push(
			{ name: task, status, priority}
			)
	
}

function deleteTask(task) {
	let name = searchName(task)
	list = list.filter(item => item.name !== name);
}

function showList(place) {
	place.textContent = "";
	let prioritize = searchPriority(place)
	let listShow = sortList(prioritize);
	listShow.forEach(item => {
		let task = item.status === STATUS.DONE ? createTaskHtml(item.name, "done") : createTaskHtml(item.name)
		place.prepend(task)
	});
	
}

function createTaskHtml(name, status = false) {

	let todoTask = document.createElement('div')
	todoTask.className = status ? "todo__task todo__task_todo" : "todo__task";

	let todoCheckbox = document.createElement('input');
	todoCheckbox.className = "todo__checkbox";
	todoCheckbox.type = "checkbox"
	todoCheckbox.checked = status ? true : false

	let todoLabel = document.createElement('label');
	todoLabel.className = "todo__label";
	todoLabel.textContent = name;

	let todoPlus = document.createElement('div');
	todoPlus.className = "todo__plus todo__plus_rotate -delet";

	todoTask.prepend(todoPlus);
	todoTask.prepend(todoLabel);
	todoTask.prepend(todoCheckbox);
	return todoTask
}

function sortList(prioritize){
	let listShow = list.filter(item => item.priority === prioritize);
	return listShow.sort(sortPriority)
}

function sortPriority(a, b) {
	if (a.status === STATUS.TODO && b.status === STATUS.DONE) return 1; // если первое значение больше второго
	if (a.status === b.status) return 0; // если равны
	if (a.status === STATUS.DONE && b.status === STATUS.TODO) return -1; // если первое значение меньше второго
}

