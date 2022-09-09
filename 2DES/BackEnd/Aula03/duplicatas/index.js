const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

//Responde as requisições que chegam pelo verbo GET
app.get('/academia/alunos', (req, res) => {
    let string = `Select * from vw_alunos`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

//Responde as requisições que chegam pelo verbo GET
app.get('/academia/aparelhos', (req, res) => {
    let string = `Select * from vw_aparelhos`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

//Responde as requisições que chegam pelo verbo GET
app.get('/academia/exercicios', (req, res) => {
    let string = `Select * from exercicios`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

//Responde as requisições que chegam pelo verbo GET
app.get('/academia/fichas', (req, res) => {
    let string = `Select * from fichas`;
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