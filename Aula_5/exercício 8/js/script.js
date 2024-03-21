var msg = document.getElementById("msg")
function bhaskara(){
    var a = parseFloat(prompt("Informe o valor de a:"))
    var b = parseFloat(prompt("Informe o valor de b:"))
    var c = parseFloat(prompt("Informe o valor de c:"))
    var calculo = ((b*b) - (4*(a)*(c)))
    msg.innerHTML = `
    <h1>Resolvendo Bhaskara</h1>
    <p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p>
    <p>O cálculo realizado será Δ=${b}² - 4.${a}.${c}</p>
    <p>O valor calculado foi Δ=${calculo}</p>
    `
}