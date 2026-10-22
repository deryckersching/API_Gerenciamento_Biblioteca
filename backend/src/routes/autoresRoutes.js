const express = require("express");
const router = express.Router();

const autoresController = require("../controllers/autoresController");

router.get("/", autoresController.buscarTodos);
router.get("/:id", autoresController.buscarPorId);
router.post("/", autoresController.criar);
router.put("/:id", autoresController.editar);
router.delete("/:id", autoresController.excluir);

module.exports = router;