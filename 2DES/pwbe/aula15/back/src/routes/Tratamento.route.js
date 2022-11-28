const express = require('express');
const router = express.Router();

const Tratamento = require("../controllers/Tratamento.controller");

router.post("/Hospital/trata", Tratamento.create);
router.delete("/Hospital/trata/:id_Trata", Tratamento.del);
router.get("/Hospital/tratas", Tratamento.readAll);
router.put("/Hospital/tratas", Tratamento.update);

module.exports = router;