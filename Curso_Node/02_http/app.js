//solicitar um modulo interno do node chamado http
var http = require('http');

//abrindo um servidor http
http.createServer(function(req,res){
    res.end("E O TI HAHA")
}).listen(8081);

console.log('Servidor rodando.....')