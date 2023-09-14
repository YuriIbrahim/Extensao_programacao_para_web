const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, dataAgendamento } = req.body;
    res.render(__dirname + '/views/dados.html', { nome, endereco, telefone, dataAgendamento });
});
app.listen(port, () => {
    console.log(`Aplicação web está rodando em http://localhost:${port}`);
});
