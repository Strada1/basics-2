const calc = (action, a, b) => {
  if (checkValidValue(a) === undefined || checkValidValue(b) === undefined)
    return "Введите валидное число.";
  if (!action) return "Необходимо ввести действие";
  if (String(action).toLowerCase() === "sum") return +a + +b;
  if (String(action).toLowerCase() === "subtract") return +a - +b;
  if (String(action).toLowerCase() === "multi") return +a * +b;
  if (
    String(action).toLowerCase() !== "sum" ||
    String(action).toLowerCase() !== "subtract" ||
    String(action).toLowerCase() !== "multi"
  )
    return "Неизвестное действие";
};

const checkValidValue = (value) => {
  if (value && !isNaN(parseInt(value))) {
    return value;
  }
};
