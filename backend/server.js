const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const PORT = process.env.API_PORT;

const autoresRoutes = require("./src/routes/autoresRoutes");
const emprestimosRoutes = require("./src/routes/emprestimosRoutes");
const generosRoutes = require("./src/routes/generosRoutes");
const livrosRoutes = require ("./src/routes/livrosRoutes");
const usuariosRoutes = require ("./src/routes/usuariosRoutes");

app.use(express.json());
app.use("/autores", autoresRoutes);
app.use("/emprestimos", emprestimosRoutes);
app.use("/generos", generosRoutes);
app.use("/livros", livrosRoutes);
app.use("/usuarios", usuariosRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`)
});