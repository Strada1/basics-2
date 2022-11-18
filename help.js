import {list} from "./main.js"

const ERROR = {
	change: "Введите верную задачу",
	add: "Введите новую задачу",
	delete: "Введите старую задачу",
}

export function showError(key) {
		let errorBlock = document.querySelector('.todo__error');
		errorBlock.textContent = ERROR[`${key}`]
		errorBlock.classList.add("todo__error_visible");
		setTimeout(() => errorBlock.classList.remove("todo__error_visible"), 4000)
	}

export const findEl = (task) => list.find(item => item.name === task)

export const findIn = (task) => list.findIndex(item => item.name === task)

export function searchPriority(item) {
		let blockPriority = item.closest('.todo__priority')
		let priority = blockPriority.dataset.priority
		return priority
	}

export function searchPlace(item) {
		let parent = item.closest(".todo__tasks")
		let place = parent.querySelector(".todo__list")
		return place
	}

export function searchName(item) {
		let label = item.closest('.todo__task').querySelector('.todo__label')
		let name = label.textContent
		return name
	}