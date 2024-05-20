const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('ETEC MCM')
});

app.get('/blog',function(req,res){
    res.send('SEJA BEM VINDO AO MEU BLOG ')
});

app.get('/sobre',function(req,res){
    res.send('SEJA BEM VINDO A MINHA PAGINA SOBRE ')
});

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá, seu nome: '+req.params.nome+'\nSua idade: '+req.params.idade)
    //res.send(req.params)
});

app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost:8081')
});