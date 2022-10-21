const calc = (action, a, b) => {
  if (checkValidValue(a) === undefined || checkValidValue(b) === undefined)
    return "Введите валидное число.";
  if (!action) return "Необходимо ввести действие";
  if (String(action).toLowerCase() === operation.sum) return +a + +b;
  if (String(action).toLowerCase() === operation.minus) return +a - +b;
  if (String(action).toLowerCase() === operation.multi) return +a * +b;
  if (
    String(action).toLowerCase() !== operation.minus ||
    String(action).toLowerCase() !== operation.sum ||
    String(action).toLowerCase() !== operation.multi
  )
    return "Неизвестное действие";
};

const checkValidValue = (value) => {
  if (value && !isNaN(parseInt(value))) {
    return value;
  }
};

const operation = { sum:'sum', minus:'minus', multi:'multi' };

console.log(calc('sum',2,1))
