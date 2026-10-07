const db = require("../config/database");

const buscarTodos = async () => {
    const [resultado] = await db.query(
        "SELECT * FROM generos"
    );

    return resultado;
};

const buscarPorId = async (id) => {
    const [resultado] = await db.query(
        "SELECT * FROM generos WHERE id = ?",
        [id]
    );

    return resultado[0];
};

const criar = async (nome) => {
    const [resultado] = await db.query(
        "INSERT INTO generos (nome) VALUES (?)",
        [nome]
    );

    return {
        id: resultado.insertId,
        nome
    };
};

const editar = async (id, nome) => {
    await db.query(
        "UPDATE generos SET nome = ? WHERE id = ?",
        [nome, id]
    );

    return {
        id,
        nome
    };
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM generos WHERE id = ?",
        [id]
    );

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir
};