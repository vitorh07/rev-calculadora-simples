function calculadora(){
    var num1 = Number(document.getElementById("num1").value);
    var operador = document.getElementById("operador").value;
    var num2 = Number(document.getElementById("num2").value);
    var resultado = document.getElementById("resultado");

    if(operador == "soma"){
        resultado.innerHTML = num1 + num2;
    }
    else if(operador == "subtracao"){
        resultado.innerHTML = num1 - num2;
    }
    else if(operador == "divisao"){
        resultado.innerHTML = num1 / num2;
    }
    else if(operador == "multiplicacao"){
        resultado.innerHTML = num1 * num2;
    }
}