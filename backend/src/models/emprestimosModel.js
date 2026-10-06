const db = require("../config/database");

const buscarTodos = async () => {
    const[resultado] = await db.query(
        "SELECT * FROM emprestimos"
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

const criar = async (data_emprestimo, data_devolucao, usuarios_id, livros_id) => {
    const[resultado] = await db.query(
            "INSERT INTO resultado (data_emprestimo, data_devolucao, usuarios_id, livros_id)",
            [data_emprestimo, data_devolucao, usuarios_id, livros_id]
    );

    return {
        id: resultado.insertId,
        data_emprestimo,
        data_devolucao,
        usuarios_id,
        livros_id

    };
};

const editar = async (id, data_emprestimo, data_devolucao, usuarios_id, livros_id) => {
    await db.query(
        "UPDATE resultado SET data_emprestimo = ?, data_devolucao = ?, usuarios_id = ?, livros_id = ? WHERE id = ?",
    );

    return {
        id, 
        data_emprestimo, 
        data_devolucao,
        usuarios_id,
        livros_id
    };
};

const excluir = async (id, data_emprestimo, data_devolucao, usuarios_id, livros_id) => {
    const[resultado] = await db.query(
        "DELETE FROM resultado WHERE id = ?",
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