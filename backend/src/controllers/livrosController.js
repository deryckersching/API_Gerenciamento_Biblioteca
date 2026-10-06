const livrosModel = require("../models/livrosModel");

const buscarLivros = (req, res) => {
    response.json(livrosModel)
};

const buscarLivrosPorId = (req, res) => {
    const id = req.params.id;
    const livro = livrosModel.find(livro => livro.id == id);

    if(!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    res.json(livro)
};

const criarLivro = (req, res) => {
    const novoLivro = {
        id: livrosModel.length + 1,
        titulo: req.body.titulo,
        isbn: req.body.isbn,
        ano_publicacao: req.body.ano_publicacao,
        numero_paginas: req.body.numero_paginas,
        sinopse: req.body.sinopse
    }

    livrosModel.push(novoLivro);

    res.status(201).json(novoLivro);
};

const editarLivro = (req, res) => {
    const id = req.params.id;
    const livro = livrosModel.find(livro => livro.id == id);

    if(!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    livro.titulo = req.body.titulo,
    livro.isbn = req.body.isbn,
    livro.ano_publicacao = req.body.ano_publicacao,
    livro.numero_paginas = req.body.numero_paginas,
    livro.sinopse = req.body.sinopse

    res.json(livro);
};

const excluirLivro = (req, res) => {
    const id = req.params.id;
    const livroIndex = livrosModel.findIndex(livro => livro.id == id);

    if (livroIndex == -1) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    livrosModel.splice(livroIndex, 1);

    res.json({
        mensagem: "Livro excluído com sucesso!"
    })
};

module.exports = {
    buscarLivros,
    buscarLivrosPorId,
    criarLivro,
    editarLivro,
    excluirLivro
}