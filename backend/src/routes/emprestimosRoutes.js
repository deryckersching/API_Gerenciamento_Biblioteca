const express = require("express");
const router = express.Router();

const emprestimosController = require("../controllers/emprestimosController");

router.get("/", emprestimosController.buscarTodos);
router.get("/:id", emprestimosController.buscarPorId);
router.post("/", emprestimosController.criar);
router.put("/:id", emprestimosController.editar);
router.delete("/:id", emprestimosController.excluir);

module.exports = router;