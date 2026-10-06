const db = require("../config/database");

const buscarTodos = async () => {
    const[resultado] = await db.query(
        "SELECT * FROM usuarios"
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

const criar = async (nome_completo, cpf, email, telefone, data_nascimento) => {
    const[resultado] = await db.query(
        "INSERT INTO resultado (nome_completo, cpf, email, telefone, data_nascimento)",
        [nome_completo, cpf, email, telefone, data_nascimento]
    );

    return {
        id: resultado.insertId,
        nome_completo,
        cpf,
        email,
        telefone,
        data_nascimento
    };
};

const editar = async (id, nome_completo, cpf, email, telefone, data_nascimento) => {
    await db.query(
        "UPDATE resultado SET nome_completo = ?, cpf = ?, email = ?, telefone = ?, data_nascimento = ? WHERE id = ?",
    );

    return {
        id,
        nome_completo,
        cpf,
        email,
        telefone,
        data_nascimento
    };
};

const excluir = async (id, nome_completo, cpf, email, telefone, data_nascimento) => {
    const[resultado] = await db.query(
        "DELETE FROM usuarios WHERE id = ?",
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