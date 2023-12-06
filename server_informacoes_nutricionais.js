
// server_informacoes_nutricionais.js
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

let nutritionalInfo = {
    'Maca': { calorias: 52, vitaminas: ['C', 'B6'] },
    'Banana': { calorias: 89, vitaminas: ['C', 'B6', 'B12'] }
    // Adicione mais informações nutricionais aqui
};

// Rota para obter informações nutricionais
app.get('/nutritionalInfo/:foodItem', (req, res) => {
    const foodItem = req.params.foodItem;
    if (nutritionalInfo[foodItem]) {
        res.json(nutritionalInfo[foodItem]);
    } else {
        res.status(404).send({ message: 'Informação nutricional não encontrada.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor de informações nutricionais rodando em http://localhost:${port}`);
});
