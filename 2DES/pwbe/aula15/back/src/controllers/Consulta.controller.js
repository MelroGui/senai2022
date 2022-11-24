const Consulta = require('../models/Consulta.model');
const con = require('../dao/Hospital.dao');

const readAll = (req, res) => {
    con.query(Consulta.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    readAll
}