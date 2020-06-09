const express = require('express');

const app = express();

app.get('/', (req, res) => { // criando a rota
    res.send('ola Node');
});

app.listen(3001); // falando pra aplicação ouvir a porta 3001 da aplicação
