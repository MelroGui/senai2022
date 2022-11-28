const express = require('express');
const router = express.Router();

const Consulta = require("../controllers/Consulta.controller");

router.get("/Hospital/consultas", Consulta.readAll);

module.exports = router;