var msg = document.getElementById("msg")
function descricao(){
    var nome = prompt("Informe o nome do produto:")
    var preco = prompt("Informe o valor do produto:")
    var recebido = prompt("Informe o valor que você ira dar:")
    var troco = recebido - preco
    msg.innerHTML = `<p>Você irá comprar um(uma) ${nome} de R$ ${preco}.</p>
    <p>Você deu ${recebido}</p>
    <p>O troco sera de R$ ${troco}.</p>`
}