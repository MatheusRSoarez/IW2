var msg = document.getElementById("msg")
function descricao(){
    var nome = prompt("Informe o nome do produto:")
    var preco = prompt("Informe o valor do produto:")
    msg.innerHTML = `Você irá comprar um(uma) ${nome} de R$ ${preco}`
}