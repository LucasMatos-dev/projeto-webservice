
// consumidor_feedback_consultas.js
const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios');

app.get('/getFeedback/:appointmentId', async (req, res) => {
    try {
        const appointmentId = req.params.appointmentId;
        const response = await axios.get(`http://localhost:3003/review?id=${appointmentId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao obter feedback da consulta.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor de feedback de consultas rodando em http://localhost:${port}`);
});
