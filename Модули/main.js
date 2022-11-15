import { calc } from './functions.js';
import { saveResult } from './functions.js';
import { removeResult } from './functions.js';

const button = document.querySelector('#buttonResult');
button.addEventListener('click', calc);

const mewSaveResult = document.querySelector('#buttonResult');
mewSaveResult.addEventListener('click', saveResult);

document.addEventListener('click', removeResult);