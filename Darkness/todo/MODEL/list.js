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
    id: 0,
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
    id: 2,
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
  const result = list.find((task) => task.id === taskId);
  result.status =
    result.status === STATUS.IN_PROGRESS
      ? STATUS.DONE
      : result.status === STATUS.DONE
      ? STATUS.IN_PROGRESS
      : null;
};

export const removeTask = (taskId) => {
  list = list.filter((el) => !(el.id === taskId));
};

export const sortedListByStatus = () => {
  return [...list].sort((a, b) => (a.status > b.status ? -1 : 1));
};
