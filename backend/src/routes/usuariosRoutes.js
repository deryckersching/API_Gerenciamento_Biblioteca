const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.get("/usuarios", usuariosController.buscarUsuarios);
router.get("/usuarios/:id", usuariosController.buscarUsuariosPorId);
router.post("/usuarios", usuariosController.criarUsuario);
router.put("/usuario/:id", usuariosController.editarUsuario);
router.delete("/usuarios/:id", usuariosController.excluirUsuario);

module.exports = router;
