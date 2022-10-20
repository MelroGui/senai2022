const express = require('express');
const router = express.Router();

const Avatar = require("./controllers/AvatarsController");

router.get("/avatars", Avatar.listarAvatars);
router.post("/avatars", Avatar.cadastrarAvatar);
router.delete("/avatars", Avatar.excluirAvatar);

module.exports = router;