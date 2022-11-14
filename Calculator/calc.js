export let result;
export function ResultProcessing() {
    let div = document.createElement('div');
    div.innerHTML = result;
    document.body.append(div);
    div.addEventListener('click', function () {
        div.remove();
    });
}

