var ajuste = document.getElementById("ajuste")
function salario(){
    var nome = prompt("Qual é o nome do funcionário?")
    var salario = parseFloat(prompt(`Qual é o salario de ${nome}?`))
    var porcentagem = parseFloat(prompt(`O salario de ${nome} vai ser reajustado em qual porcentagem?`))
    var valor = (salario*porcentagem)/100
    var final = salario+valor
    ajuste.innerHTML = `
    <h1>${nome} recebeu um aumento salarial!</h1>
    <p>O salario atual era R$ ${salario}</p>
    <p>Com um aumento de ${porcentagem}%, o salario vai aumentar R$ ${valor} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar R$ ${final}</p>`
}