
// consumidor_analise_nutricional.js
const express = require('express');
const app = express();
const port = 4001;
const axios = require('axios');

app.get('/analyzeDiet/:foodItem', async (req, res) => {
    try {
        const foodItem = req.params.foodItem;
        const response = await axios.get(`http://localhost:3002/nutritionalInfo/${foodItem}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao obter informações nutricionais.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor de análise nutricional rodando em http://localhost:${port}`);
});
