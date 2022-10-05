const express = require('express');
const cors = require('cors');

const itens = require('./src/routes/ItensRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use(itens);

app.listen(3000, () => {
    console.log("Desça dai seu corno desça dai");
});