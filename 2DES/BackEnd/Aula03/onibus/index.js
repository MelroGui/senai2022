const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'onibus'
});

//Responde as requisições que chegam pelo verbo GET
app.get('/onibus/motorista', (req, res) => {
    let string = `Select * from vw_motorista`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

//Inicia o túnel e ouve os verbos HTTP
app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});