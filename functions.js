export function deleteHistory() {
    document.querySelector('.history').addEventListener('click', (e) => {
        const targetResult = e.target;
        targetResult.remove();
    });

} 
