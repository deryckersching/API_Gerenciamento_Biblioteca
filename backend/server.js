const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.API_PORT || 3033;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`)
});