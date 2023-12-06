
// server_monitoramento_dieta.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let dietRecords = [];

// Rota para adicionar registro de dieta
app.post('/diets', (req, res) => {
    const dietRecord = req.query["nome"];
    dietRecords.push(dietRecord);
    res.send('Registro de dieta adicionado com sucesso!');
});

// Rota para obter registros de dieta
app.get('/diets', (req, res) => {
    res.json(dietRecords);
});

app.listen(port, () => {
    console.log(`Servidor de monitoramento de dieta rodando em http://localhost:${port}`);
});
