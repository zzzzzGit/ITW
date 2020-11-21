window.onload = function () {
    console.log("Window loaded!");
}

var resultado = document.getElementById("res").innerHTML;
var operations = ["+", "-", "*", "/"];
function update() {
    document.getElementById("res").innerHTML = resultado;

}
function addNumber() {
    console.log("Tecla: " + event.target.value);
    if (resultado == "0") {
        resultado = event.target.value;
    }
    else {
        resultado += event.target.value;

    }

    update();
}

function addOperation() {
    console.log("Tecla: " + event.target.value);
    if (resultado != "0") {
        resultado += event.target.value;
    }
    update();
}

function clearResult() {
    resultado = "0";
    update();

}

function calculate() {
    if (!(operations.indexOf(resultado.slice(-1)) >= 0)) {
        if (eval(resultado) == Infinity) {
            alert("Cant divide by 0!");
        }
        else {
            resultado = eval(resultado);
        }

    }
    update();
}