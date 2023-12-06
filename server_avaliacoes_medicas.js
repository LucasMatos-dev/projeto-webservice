
// server_avaliacoes_medicas.js
const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

let medicalReviews = [];

// Rota para adicionar avaliação médica
app.post('/review', (req, res) => {
    const review = req.body;
    medicalReviews.push(review);
    res.send('Avaliação médica adicionada com sucesso!');
});

// Rota para obter avaliações médicas
app.get('/review', (req, res) => {
    res.json(medicalReviews);
});

app.listen(port, () => {
    console.log(`Servidor de avaliações médicas rodando em http://localhost:${port}`);
});
