const db = require("../config/database");

const buscarTodos = async () => {
    const [resultado] = await db.query(
        "SELECT id, cpf, cpf_iv, cpf_tag, nome_completo, data_aniversario, email, phone_number FROM usuarios"
    );

    return resultado;
};

const buscarPorId = async (id) => {
    const [resultado] = await db.query(
        "SELECT id, cpf, cpf_iv, cpf_tag, nome_completo, data_aniversario, email, phone_number FROM usuarios WHERE id = ?",
        [id]
    );

    return resultado[0];
};

const criar = async ({cpf, cpf_iv, cpf_tag, nome_completo, data_aniversario, email, phone_number, senha_hash, senha_salt}) => {
    const [resultado] = await db.query(
        "INSERT INTO usuarios (cpf, cpf_iv, cpf_tag, nome_completo, data_aniversario, email, phone_number, senha_hash, senha_salt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [cpf, cpf_iv, cpf_tag, nome_completo, data_aniversario, email, phone_number, senha_hash, senha_salt]
    );

    return {
        id: resultado.insertId,
    };
};

const editar = async (id, nome_completo, cpf, email, phone_number, data_aniversario) => {
    await db.query(
        "UPDATE usuarios SET nome_completo = ?, cpf = ?, email = ?, phone_number = ?, data_aniversario = ? WHERE id = ?",
        [nome_completo, cpf, email, phone_number, data_aniversario, id]
    );

    return {
        id,
        nome_completo,
        cpf,
        email,
        phone_number,
        data_aniversario
    };
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM usuarios WHERE id = ?",
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