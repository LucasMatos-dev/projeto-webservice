
// server_agendamento_consultas.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let appointments = [];

// Rota para agendar uma consulta
app.post('/schedule', (req, res) => {
    const { patientName, date, time } = req.body;
    if (!patientName || !date || !time) {
        return res.status(400).send({ message: 'Dados de agendamento incompletos.' });
    }

    const newAppointment = {
        id: appointments.length + 1,
        patientName,
        date,
        time
    };
    
    appointments.push(newAppointment);
    res.status(201).send(newAppointment);
});

// Rota para listar todas as consultas
app.get('/appointments', (req, res) => {
    res.status(200).send(appointments);
});

app.listen(port, () => {
    console.log(`Servidor de agendamento de consultas rodando em http://localhost:${port}`);
});
