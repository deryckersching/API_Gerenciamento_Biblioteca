
const bd = require("../config/database/conexao");

async function buscarTodos() {
    const sql = `
        SELECT *
        FROM livros;
    `;
    const [resultado] = await bd.execute(sql);

    return resultado;
};

async function buscarPorId(id) {
    const sql = `
        SELECT *
        FROM livros
        WHERE id = ?;
    `;
    const [resultado] = await bd.execute(sql, [id]);

    return resultado;
};

async function criar({ titulo, isbn, ano_publicacao, numero_paginas, sinopse }) {
    const sql = `
        INSERT INTO livros (titulo, isbn, ano_publicacao, numero_paginas, sinopse)
        VALUES (?, ?, ?, ?, ?);
    `;
    const [resultado] = await bd.execute(sql, [
        titulo,
        isbn,
        ano_publicacao,
        numero_paginas,
        sinopse
    ]);

    return resultado;
};

async function editar(id, dados) {
    const camposPermitidos = [
        "titulo",
        "isbn",
        "ano_publicacao",
        "numero_paginas",
        "sinopse"
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
        UPDATE livros
        SET ${atribuicoes}
        WHERE id = ?;
    `;

    const [resultado] = await bd.execute(sql, [...valores, id]);

    return resultado;
};

async function excluir(id) {
    const sql = `
        DELETE FROM livros
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
