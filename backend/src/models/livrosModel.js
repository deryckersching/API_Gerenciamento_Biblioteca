const db = require("../config/database");

const buscarTodos = async () => {
    const [resultado] = await db.query(
        "SELECT * FROM livros"
    );

    return resultado;
};

const buscarPorId = async (id) => {
    const [resultado] = await db.query(
        "SELECT * FROM livros WHERE id = ?",
        [id]
    );

    return resultado[0];
};

const criar = async (titulo, isbn, ano_publicacao, numero_paginas, sinopse) => {
    const [resultado] = await db.query(
        "INSERT INTO livros (titulo, isbn, ano_publicacao, numero_paginas, sinopse) VALUES (?, ?, ?, ?, ?)",
        [titulo, isbn, ano_publicacao, numero_paginas, sinopse]
    );

    return {
        id: resultado.insertId,
        titulo,
        isbn,
        ano_publicacao,
        numero_paginas,
        sinopse
    };
};

const editar = async (id, titulo, isbn, ano_publicacao, numero_paginas, sinopse) => {
    await db.query(
        "UPDATE livros SET titulo = ?, isbn = ?, ano_publicacao = ?, numero_paginas = ?, sinopse = ? WHERE id = ?",
        [titulo, isbn, ano_publicacao, numero_paginas, sinopse, id]
    );

    return {
        id,
        titulo,
        isbn,
        ano_publicacao,
        numero_paginas,
        sinopse
    };
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM livros WHERE id = ?",
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