const Profissional = require('../models/Profissional.model');
const con = require('../dao/Hospital.dao');

const readAll = (req, res) => {
    con.query(Profissional.readAll(), (err, result) => {
        if (err == null)
            res.status(200).json(result).end();
        else
            res.status(500).end();
    });
}

const readProf = (req, res) => {
    con.query(Profissional.readProf(req.params), (err, result) => {
        if (err == null)
            res.status(200).json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    readAll,
    readProf
}