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

function apagar(){
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    num1.value = ""
    num2.value = ""
    resultado.innerHTML = "0"
}
