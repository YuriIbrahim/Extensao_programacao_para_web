const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  
  if (!nome || !endereco || !telefone || !data) {
    return res.sendFile(__dirname + '/views/erro.html');
  }

  res.sendFile(__dirname + '/views/dados.html');
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});