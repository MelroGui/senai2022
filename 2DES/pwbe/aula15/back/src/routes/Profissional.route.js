const express = require('express');
const router = express.Router();

const Profissional = require("../controllers/Profissional.controller");

router.get("/Hospital/profs", Profissional.readAll);
router.get("/Hospital/prof/:id_Prof", Profissional.readProf);

module.exports = router;