const livrosModel = require("../models/livrosModel");

const buscarLivros = async (req, res) => {
    const livros = await livrosModel.buscarTodos();

    res.json(livros);
};

const buscarLivroPorId = async (req, res) => {
    const id = req.params.id;
    const livro = await livrosModel.buscarPorId(id);

    if(!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    res.json(livro);
};

const criarLivro = async (req, res) => {
    const novoLivro = await livrosModel.criar(
        req.body.titulo,
        req.body.isbn,
        req.body.ano_publicacao,
        req.body.numero_paginas,
        req.body.sinopse
    );

    res.status(201).json(novoLivro);
};

const editarLivro = async (req, res) => {
    const id = req.params.id;

    const livro = await livrosModel.buscarPorId(id);

    if(!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    const livroAtualizado = await livrosModel.editar(
        id,
        req.body.titulo,
        req.body.isbn,
        req.body.ano_publicacao,
        req.body.numero_paginas,
        req.body.sinopse
    );

    res.json(livroAtualizado);
};

const excluirLivro = async (req, res) => {
    const id = req.params.id;

    const livro = await livrosModel.buscarPorId(id);

    if(!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    await livrosModel.excluir(id);

    res.json({
        mensagem: "Livro excluído com sucesso!"
    })
};

module.exports = {
    buscarLivros,
    buscarLivroPorId,
    criarLivro,
    editarLivro,
    excluirLivro
};