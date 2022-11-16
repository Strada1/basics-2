/*export let divRes = document.querySelector('.listResult');
export let result = document.querySelector('.res');


export function add() {
    let el = document.createElement('div');
    el.addEventListener('click', del);
    el.innerHTML = result.innerHTML;
    divRes.after(el); 

function del() {
    el.remove();

    /*function del(el) {
        el.target.remove();
        // this.remove();
    } */
