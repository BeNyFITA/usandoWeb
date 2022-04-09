const express = require('express');

const app = express();

//console.log(app);
app.get('/', (req,res)=> res.send('Hello There!!'));

app.get('/contatos', (req, res)=> res.send({
    nome: "Davi",
    idade: 21
}));

 app.listen(3000, ()=> console.log("Server rodando na porta 3000"));