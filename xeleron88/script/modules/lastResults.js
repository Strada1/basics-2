export const lastResultsVisible = () => {
  const countOfLastResults = document.querySelectorAll('.results__result').length;
  if (countOfLastResults > 0) {
    document.querySelector('.lastResults').style.display = '';
  } else {
    document.querySelector('.lastResults').style.display = 'none';
  }
};

export const addResult = (result) => {
  document.querySelector('.lastResults').insertAdjacentHTML('beforeend', `<div class="results__result">${result}</div>`);
  lastResultsVisible();
};

export const addEventListener = () => {
  document.querySelector('.lastResults').addEventListener('click', (e) => {
    const targetResult = e.target;
    if (targetResult.className === 'results__result') {
      targetResult.remove();
    }
    if (targetResult.className === 'lastResults__AC') {
      const allTargets = document.querySelectorAll('.results__result');
      for (const item of allTargets) {
        item.remove();
      }
    }
    lastResultsVisible();
  });
};
