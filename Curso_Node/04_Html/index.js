const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/paginas/index.html')
});

app.get('/sobre',function(req,res){
    res.sendFile(__dirname + '/paginas/sobre.html')
});

app.get('/blog',function(req,res){
    res.send('SEJA BEM VINDO AO MEU BLOG ')
});


app.get('/cadastro/:nome/:cargo',function(req,res){
    res.send('Olá, seu nome: '+req.params.nome+'\nSeu cargo: '+req.params.cargo)
    //res.send(req.params)
});

app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost:8081')
});