const express = require('express');
const router = express.Router();

const Produto = require("../controllers/produto.controller.js");

router.post("/solicitacoes/prod", Produto.create);
router.get("/solicitacoes/prods", Produto.readAll);
router.get("/solicitacoes/prod/Nome_prod", Produto.readName);
router.put("/solicitacoes/prodd", Produto.update);

module.exports = router;