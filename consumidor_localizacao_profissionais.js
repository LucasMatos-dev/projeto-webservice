
// consumidor_localizacao_profissionais.js
const express = require('express');
const app = express();
const port = 4003;
const axios = require('axios');

const profissional = ["Eduardo Tajra", "Lucas Matos", "Júlia Ayres", "João Amora"]

app.get('/findHealthProfessionals', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/appointments`);
        // Implementação simplificada da localização de profissionais
        const professionals = response.data.map(appointment => {
            return { appointmentId: appointment.id, professional: 'Profissional '+profissional[Math.floor(Math.random() * profissional.length)] };
        });
        res.json(professionals);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao localizar profissionais de saúde.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor de localização de profissionais de saúde rodando em http://localhost:${port}`);
});
