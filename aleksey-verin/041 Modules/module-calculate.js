export function calculate() {
    
    let result

    function calculateAndShowResult() {
        let a = Number(document.querySelector('#numA').value)
        let b = Number(document.querySelector('#numB').value)
        const action = document.querySelector('#calcAction').value
    
        const operations = {
                add: a + b,
                multi: a * b,
                subtract: a - b,
                division: a / b,
                power: a ** b
            }
        
        result = Number(operations[action].toFixed(15))
        document.querySelector('#printResult').textContent = result
        return result
    }
        
    function writeResultInItemList () {
        const item = document.createElement('div');
        
        item.className = "item-result-list";
        item.textContent = result;
        item.addEventListener("click", deleteItem) // или так item.setAttribute("onclick", "this.remove()");
        
        function deleteItem() {
            this.remove();
        }
        
        document.body.querySelector(".container-for-results").prepend(item)
    }
    
    calculateAndShowResult()
    writeResultInItemList()
}