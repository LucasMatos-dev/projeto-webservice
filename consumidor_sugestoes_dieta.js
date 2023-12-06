const express = require('express');
const app = express();
const port = 4002;
const axios = require('axios');

// Lista fixa de alimentos
const alimentos = ['Maca', 'Banana'];

app.get('/getDietSuggestions', async (req, res) => {
    try {
        let suggestions = [];

        for (const alimento of alimentos) {
            const response = await axios.get(`http://localhost:3002/nutritionalInfo/${alimento}`);
            suggestions.push({
                alimento,
                infoNutricional: response.data,
                suggestion: `Sugestão personalizada para ${alimento}`
            });
        }

        res.json(suggestions);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao obter sugestões de dieta.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor de sugestões de dieta rodando em http://localhost:${port}`);
});
