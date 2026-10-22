
const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
        SELECT *
        FROM autores;
    `;
    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
        SELECT *
        FROM autores
        WHERE id = ?;
    `;
    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar({ nome_completo, nacionalidade, data_nascimento }) {
    const sql = `
        INSERT INTO autores (nome_completo, nacionalidade, data_nascimento)
        VALUES (?, ?, ?);
    `;
    const [resultado] = await bd.execute(sql, [
        nome_completo,
        nacionalidade,
        data_nascimento
    ]);

    return resultado;
};

async function editar(id, dados) {
    const camposPermitidos = [
        "nome_completo",
        "nacionalidade",
        "data_nascimento"
    ];

    const campos = Object.keys(dados);

    if (
        campos.length === 0 ||
        campos.some(campo => !camposPermitidos.includes(campo))
    ) {
        throw new Error("Campos (variáveis) de atualização inválidos");
    };

    const atribuicoes = campos.map(campo => `\`${campo}\` = ?`).join(", ");
    const valores = campos.map(campo => dados[campo]);

    const sql = `
        UPDATE autores
        SET ${atribuicoes}
        WHERE id = ?;
    `;

    const [resultado] = await bd.execute(sql, [...valores, id]);

    return resultado;
};

async function excluir(id) {
    const sql = `
        DELETE FROM autores
        WHERE id = ?;
    `;
    const [resultado] = await bd.execute(sql, [id]);

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir
};
