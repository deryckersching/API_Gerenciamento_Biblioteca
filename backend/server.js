const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const autoresRoutes = require("./src/routes/autoresRoutes");
const emprestimosRoutes = require("./src/routes/emprestimosRoutes");
const generosRoutes = require("./src/routes/generosRoutes");
const livrosRoutes = require ("./src/routes/livrosRoutes");
const usuariosRoutes = require ("./src/routes/usuariosRoutes");

app.use(autoresRoutes);
app.use(emprestimosRoutes);
app.use(generosRoutes);
app.use(livrosRoutes);
app.use(usuariosRoutes);

const PORT = process.env.API_PORT || 3033;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`)
});