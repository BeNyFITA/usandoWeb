/* Vamos começar a praticar o uso do express...

Pedimos que, como primeiro passo, crie a variável express e armazene nela o módulo express. Depois, crie a variável app e armazene nela a execução da função de alto nível express(). */
const express = require('express');
const app = express();

/* Vamos ver como configurar um servidor com o Express:

Seu trabalho aqui será instanciar um servidor na porta 8000. Por sua vez, queremos que a frase "Levantando um servidor com Express" seja exibida no console quando o servidor estiver rodando, para verificar se foi configurado corretamente. */

app.listen(8000, ()=>console.log("Levantando um servidor com Express"));