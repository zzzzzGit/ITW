function calcula() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var operatorUsed = document.getElementById("operator").options[document.getElementById("operator").selectedIndex].text;

    if (operatorUsed == "+") {
        document.getElementById("res").innerHTML = x + y;
    }
    else if (operatorUsed == "-") {
        document.getElementById("res").innerHTML = x - y;
    }
    else if (operatorUsed == "*") {
        document.getElementById("res").innerHTML = x * y;
    }
    else if (operatorUsed == "/") {
        document.getElementById("res").innerHTML = x / y;
    }
}

function ligar() {
    document.getElementById("lampada").src = 'https://static.cdn.pleno.news/2017/11/2017-11-23_luz_acesa-1024x515.jpg';
}

function baralhar() {
    var figuras = document.getElementById("jogo").querySelectorAll(".figura");
    for (index = 0; index < figuras.length; index++) { // left: 0 a 500    top: 0 a 600
        figuras[index].style.top = String(Math.floor(Math.random() * 300)) + "px";
        figuras[index].style.left = String(Math.floor(Math.random() * 500)) + "px";
    }
}

function informacao(figura) {
    document.getElementById("cor").innerHTML = "Cor: " + figura.style.backgroundColor;
    forma = "";
    if (figura.id == "retAzul" || figura.id == "retLaranja") {
        forma = "retangulo"
    }
    else if (figura.id == "circPreto") {
        forma = "circulo";
    }
    else if (figura.id == "ovalVerde") {
        forma = "oval"
    }
    document.getElementById("forma").innerHTML = "Forma: " + forma;
    document.getElementById("posicao").innerHTML = "Posicao (Top,left): " + figura.style.top + "," + figura.style.left;

}

function limparInformacao() {
    document.getElementById("cor").innerHTML = "Cor: ";
    document.getElementById("forma").innerHTML = "Forma: ";
    document.getElementById("posicao").innerHTML = "Posicao (Top,left = 0,0): ";

}
