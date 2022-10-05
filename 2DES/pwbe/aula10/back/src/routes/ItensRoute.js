const express = require('express');
const router = express.Router();

const ItemS = require("../controllers/ItemSolController");

router.get("/solicitacoes/itens", ItemS.listarItens);
router.post("/solicitacoes/item", ItemS.criarItem);


module.exports = router;