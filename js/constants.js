export const UI_ELEMENTS = {
  HIGH_FORM: document.querySelector('.todo__form--high'),
  LOW_FORM: document.querySelector('.todo__form--low'),
  INPUT_HIGH: document.querySelector('.todo__form-input--high'),
  INPUT_LOW: document.querySelector('.todo__form-input--low'),
  HIGH_LIST: document.querySelector('.todo__list--high'),
  LOW_LIST: document.querySelector('.todo__list--low')
}

export const TODO_STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  DEFAULT_STATUS: "In Progress",
  UNKNOW_TASK_STATUS: "Task or status not found",
}

export const TODO_PRIORITY = {
  LOW: 'low',
  HIGHT: 'high',
}