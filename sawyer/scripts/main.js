res.addEventListener("click", calculate);

function calculate(elem1, elem2) {

    elem1 = document.getElementById("elem1").value;
    elem2 = document.getElementById("elem2").value;   
    action = document.getElementById("select").value;

    switch(action) {
        case "plus":
        result = +elem1 + +elem2;
        break;

        case "minus":
        result = elem1 - elem2;
        break;

        case "multiply":
        result = elem1 * elem2;
        break;

        case "division":
        result = elem1 / elem2;
        break;

        default: 
        result = "wrong action";
        break;

    }
    document.getElementById("result").value = result;
}

    
     
