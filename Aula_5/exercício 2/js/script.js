var msg = document.getElementById("msg")
function mensagem(){
    var nome = prompt("Qual é o seu nome?")
    msg.innerHTML = "Olá "+nome+". Prazer em te conhecer "
}