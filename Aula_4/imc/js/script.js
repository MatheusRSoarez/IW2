var resultado = document.getElementById('resultado')
var diagnostico = document.getElementById('diag')

function calculoImc(){
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var resultadoCalculo = (peso/(altura*altura))
    resultado.innerHTML = resultadoCalculo
    diagnosticoMasc(resultadoCalculo)
}

function diagnosticoMasc(resultadoCalculo){
    console.log(resultadoCalculo)
   if(resultadoCalculo < 18.5){
    return diagnostico.innerHTML = "Abaixo do peso"
   }else if(resultadoCalculo >= 18.5 && resultadoCalculo <= 24.9 ){
    return diagnostico.innerHTML = "Peso normal"
   }else if(resultadoCalculo >=25 && resultadoCalculo <= 29.9){
    return diagnostico.innerHTML = "Sobrepeso"
   }else if(resultadoCalculo >= 30 && resultadoCalculo <= 34.9){
    return diagnostico.innerHTML = "Obesidade I"
   }else if(resultadoCalculo >= 35 && resultadoCalculo <= 39.9){
    return diagnostico.innerHTML = "Obesidade II"
   }else{
    return diagnostico.innerHTML = "Obsesidade III"
   }
}

function limparTudo(){
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    peso.value = ""
    altura.value = ""
    resultado.innerHTML = ""
    diagnostico.innerHTML = ""
}