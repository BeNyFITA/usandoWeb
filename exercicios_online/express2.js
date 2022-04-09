/* Vamos explorar os diferentes métodos de requisição que podemos usar com o módulo Express.

Seu trabalho será, utilizando o método GET, criar uma rota para "/home" que devolva a frase "Olá, estamos na página home". */
const express = require('express');
const app = express();

// Escreva seu código aquí
app.get('/home', (req,res)=> res.send("Olá, estamos na página home"));

/* Vamos no seu perfil...

Queremos que você crie uma rota que utilize o método get e aponte para "/perfil". Deve retornar a variável boasVindas que lhe entregaremos declarada. */
let boasVindas = "Bem vindo/a, aqui estamos em seu perfil"

// Escreva seu código aqui

app.get('/perfil', (req, res)=> res.send(boasVindas));

/* Para começar, queremos que você crie a variável produto. Ela deve armazenar um objeto com as seguintes propriedades: tipoProduto, preco, quantidade, onde cada uma delas deve ter o valor null, já que, no momento, não temos nenhum dado.

Por último, queremos que você crie uma rota que utilize o método get e aponte para a rota "/produto/adicionar". Isto deve retornar a variável do produto que você criou.


Gostaríamos de enviar um produto vazio ao usuário... */
let produto = {
    produto: 'living',
    preco: 1245, 
    quantidade: 300

} ;

app.get('/produto/adicionar' , (req, res)=> res.send(produto))

/* Está na hora de enviar alguns dados para o servidor...

Para este exercício usaremos a variável produto (que já foi declarada). Queremos que: à propriedade tipoProduto seja atribuída a string "living", à preco o número 1245 e à quantidade o número 300.

Por último, pedimos que crie uma rota que aponte para o endereço "/produto/criar". Esta rota deverá enviar a variável produto que armazena o nome produto criado acima.

Já sabe qual método precisará utilizar para este exercício? */

app.post('/produto/criar', (req, res)=> res.send(produto));




app.listen(8000, ()=>console.log("Levantando um servidor com Express"));