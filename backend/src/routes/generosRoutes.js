const express = require("express");
const router = express.Router();

const generosController = require("../controllers/generosController");

router.get("/", generosController.buscarTodos);
router.get("/:id", generosController.buscarPorId);
router.post("/", generosController.criar);
router.put("/:id", generosController.editar);
router.delete("/:id", generosController.excluir);

module.exports = router;