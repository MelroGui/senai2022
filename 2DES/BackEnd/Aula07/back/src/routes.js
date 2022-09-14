const Express = require('express');

const router = Express.Router();

const LancamentosController = require("./controllers/LancamentosController");

router.get("/lancamentos", LancamentosController.listarLancamentos);
router.get("/lancamento/:data", LancamentosController.listaLancamento);
router.post("/lancamento", LancamentosController.cadastrarLancamento);

module.exports = router;