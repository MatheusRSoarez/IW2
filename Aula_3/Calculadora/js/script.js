var resultado = document.getElementById('resultado')

function pegarSoma(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var soma = num1 + num2 
    resultado.innerHTML = soma
}

function pegarSub(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var sub = num1 - num2 
    resultado.innerHTML = sub
}

function pegarMult(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var mult = num1 * num2 
    resultado.innerHTML = mult
}

function pegarDiv(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var div = num1 / num2 
    resultado.innerHTML = div
}
