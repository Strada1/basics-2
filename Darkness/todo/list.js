export const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
export const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

export let list = [
  {
    name: `Вот вам и супер интересная тема.Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.`,
    priority: PRIORITY.HIGH,
    status: STATUS.IN_PROGRESS,
    id: 2,
  },
  {
    name: "Сверстать этот TODO list",
    priority: PRIORITY.HIGH,
    status: STATUS.IN_PROGRESS,
    id: 1,
  },
  {
    name: "Начать делать задачу",
    priority: PRIORITY.HIGH,
    status: STATUS.DONE,
    id: 4,
  },
  {
    name: "Посмотреть ютубчик",
    priority: PRIORITY.LOW,
    status: STATUS.IN_PROGRESS,
    id: 3,
  },
];

export const addTask = (task) => {
  list = [...list, task];
};

export const changeStatus = (taskId) => {
  const result = list.filter((task) => task.id === taskId);
  for (let task of result) {
    task.status =
      task.status === STATUS.IN_PROGRESS
        ? STATUS.DONE
        : task.status === STATUS.DONE
        ? STATUS.IN_PROGRESS
        : null;
  }
};

export const removeTask = (taskId) => {
  list = list.filter((el) => !(el.id === taskId));
};

export const sortList = (category) => {
  if (category === "status") {
    list = [...list.sort((a, b) => (a.status > b.status ? -1 : 1))];
  } else if (category === "id") {
    return [...list.sort((a, b) => a.id - b.id)][list.length - 1].id;
  }
};
