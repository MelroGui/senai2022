require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const Profissional = require('./src/routes/Profissional.route');
const Consulta = require('./src/routes/Consulta.route');
const Tratamento = require('./src/routes/Tratamento.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use('/Profissional',Profissional)
    .use('/Consulta',Consulta)
    .use('/Tratamento',Tratamento);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});