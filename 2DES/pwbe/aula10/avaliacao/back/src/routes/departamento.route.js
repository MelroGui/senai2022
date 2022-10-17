const express = require('express');
const router = express.Router();

const Departamento = require("../controllers/departamento.controller");

router.post("solicitacoes/depto", Departamento.create);
router.delete("solicitacoes/depto/:cod_depto", Departamento.del);
router.get("solicitacoes/depts", Departamento.readAll);

module.exports = router;