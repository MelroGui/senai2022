const Avatars = require('../models/Avatars');
const con = require('../dao/dbavatars');
const multer = require('multer');
const upload = multer().single('foto')
const fs = require('fs');

const cadastrarAvatar = async (req, res) => {
    upload(req, res, function (err) {
        if (err)
            res.status(500).json({ error: 1, payload: err }).end();
        else {
            let string = Avatars.toCreate(req.body, req.file);
            con.query(string, (err, result) => {
                if (err == null) {
                    //res.status(201).json(dados).end();
                    res.redirect('http://127.0.0.1:4500/front/avatars.html');
                } else {
                    res.status(500).json(err).end();
                }
            });
        }
    });
}

const listarAvatars = (req, res) => {
    let string = Avatars.toReadAll();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(Avatars.toAscii(result)).end();
        }
    });
}

const excluirAvatar = (req, res) => {
    let string = Avatars.toDel(req.body);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    listarAvatars,
    cadastrarAvatar,
    excluirAvatar
}