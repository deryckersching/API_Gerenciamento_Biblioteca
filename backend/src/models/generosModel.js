const db = require("../config/database");

const buscarTodos = async () => {
    const[resultado] = await db.query(
        "SELECT * FROM generos "
    );

    return resultado;
};

const buscarPorId = async (id) => {
    const[resultado] = await db.query(
        "SELECT * FROM resultado WHERE id = ?",
        [id]
    );

    return resultado[0];
};

const criar = async (nome) => {
    const[resultado] = await db.query(
        "INSERT INTO resultado (nome)",
        [nome]
    );

    return {
        id: resultado.insertId,
        nome
    };
};

const editar = async (id, nome) => {
    await db.query(
        "UPDATE resultado SET nome = ? WHERE id = ?",
        [nome, id]
    );

    return {
        id,
        nome
    };
};

const excluir = async (id, nome) => {
    cons[resultado] = await db.query(
        "DELETE FROM generos WHERE id = ?",
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
