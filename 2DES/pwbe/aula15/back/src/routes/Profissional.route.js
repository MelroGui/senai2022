const express = require('express');
const router = express.Router();

const Profissional = require("../controllers/Profissional.controller");

router.get("Hospital/profs", Profissional.readAll);

module.exports = router;