const Express = require('express');

const router = Express.Router();

const ClientesController = require("./controllers/ClientesController");

router.get("/clientes/:cod_cli", ClientesController.listarClientes);
router.get("/clientes", ClientesController.listarClientes);
router.post("/clientes", ClientesController.cadastrarCliente);

module.exports = router;