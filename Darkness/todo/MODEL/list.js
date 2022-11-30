import data from "./data.json" assert { type: "json" };
export const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
export const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

export let list;
if (
  localStorage.getItem("data") === "[]" ||
  localStorage.getItem("data") === null
) {
  localStorage.setItem("data", JSON.stringify(data));
  list = JSON.parse(localStorage.getItem("data"));
} else {
  list = JSON.parse(localStorage.getItem("data"));
}

export const addTask = (task) => {
  localStorage.setItem("data", JSON.stringify([...list, task]));
  list = JSON.parse(localStorage.getItem("data"));
};

export const changeStatus = (taskId) => {
  const result = list.find((task) => task.id === taskId);
  result.status =
    result.status === STATUS.IN_PROGRESS
      ? STATUS.DONE
      : result.status === STATUS.DONE
      ? STATUS.IN_PROGRESS
      : null;
  localStorage.setItem("data", JSON.stringify(list));
};

export const removeTask = (taskId) => {
  localStorage.setItem(
    "data",
    JSON.stringify(list.filter((el) => !(el.id === taskId)))
  );
  list = JSON.parse(localStorage.getItem("data"));
};

export const sortedListByStatus = () => {
  return [...list].sort((a, b) => (a.status > b.status ? -1 : 1));
};
