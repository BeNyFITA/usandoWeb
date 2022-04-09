/* const express = require('express');
const { get } = require('http');
const path = require('path')
console.log("iciciando um server...");
const app =  express();


app.listen(80,  ()=>{
    console.log('server iniciado')
});

let boasVindas = "Bem vindo/a,"


app.get('/', (req, res)=> res.send(boasVindas));

app.get('/boasVindas', (req, res)=>{
    res.sendFile(path.join(___dirname, './boas.html'))
});

app.post('/usuario', (req, res) => {
    res.send('Cheguei no post ...');
}); */

// chamar as dependencias ..
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const myParser = require('body-parser');
const { truncateSync } = require('fs');
// fazer a lógica do servidor web..
const app = express();
//.listen
app.listen(80,()=>{
    console.log(`Servidor Iniciado....`)

//Passando parser e encolder;

/* app.use(myParser.json({limit:'200mb'}));
app.use(myParser.urlencoded({limit:'200mb', extended: true}));

 */
})
// ouvir as requisições get na rota ..
app.get('/', (req, res)=>{
    res.send(`<h1>Hello there!!</h1>`)
});

// rota com get /boasvindas --> http:/localhost/boasvindas
// enviando o html;
app.get('/boasVindas',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/boas.html'));
})

//rotas. GET, POST, PUT, DELETE, PATCH;

// rotas para usuário:
app.post('/usuario', (req, res) => {
    //console.log('Body', req.body)
    res.send(`Cheguei no post...`)

});