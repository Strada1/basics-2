const fetchUrl = (url) => {
  console.log(`Fetching: ${url}`);
};

const debounce = (callback, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

const fetching = debounce(fetchUrl, 1000);
console.log(fetching);
fetching(1, 2, 3);
fetching(2, 4, 5);
fetching(3, 5, 5);
fetching(4, 6, 6);
fetching(5, 2, 3);
