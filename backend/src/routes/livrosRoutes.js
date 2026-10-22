const express = require("express");
const router = express.Router();

const livrosController = require("../controllers/livrosController");

router.get("/", livrosController.buscarTodos);
router.get("/:id", livrosController.buscarPorId);
router.post("/", livrosController.criar);
router.put("/:id", livrosController.editar);
router.delete("/:id", livrosController.excluir);

module.exports = router;