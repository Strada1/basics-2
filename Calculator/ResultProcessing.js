export function ResultProcessing() {
    let result;
    let div = document.createElement('div');
    div.innerHTML = result;
    document.body.append(div);
    div.addEventListener('click', function () {
        div.remove();
    });
}

