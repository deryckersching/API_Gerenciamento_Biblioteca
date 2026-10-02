const db = require("../config/database");

const buscarTodos = async () => {
    const[resultado] = await db.query(
        "SELECT * FROM autores"
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

const criar = async (nome_completo, nacionalidade, data_nascimento) => {
    const resultado = await db.query(
        "INSERT INTO resultado (nome_completo, nacionalidade, data_nascimento) VALUES (?, ?, ?)",
        [nome_completo, nacionalidade, data_nascimento]
    );

    return {
        id: resultado.insertId,
        nome_completo,
        nacionalidade,
        data_nascimento
    };
};

const editar = async (id, nome_completo, nacionalidade, data_nascimento) => {
    await db.query(
        "UPDATE resultado SET nome_completo = ?, nacionalidade = ?, data_nascimento = ? WHERE id = ?",
        [nome_completo, nacionalidade, data_nascimento, id]
    );

    return {
        id,
        nome_completo,
        nacionalidade,
        data_nascimento
    };
};

const excluir = async (id) => {
    const [resultado]  = await db.query(
        "DELETE FROM resultado WHERE id = ?",
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
