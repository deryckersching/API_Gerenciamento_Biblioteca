
const livrosModel = require("../models/livrosModel");

async function buscarTodos(req, res) {
    try {
        const livros = await livrosModel.buscarTodos();

        return res.json(livros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar livros"
        });
    };
};

async function buscarPorId(req, res) {
    try {
        const id = req.params.id;
        const livro = await livrosModel.buscarPorId(id);

        if (!livro || livro.length === 0) {
            return res.status(404).json({
                error: "Livro não encontrado"
            });
        };

        return res.json(livro);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar livro"
        });
    };
};

async function criar(req, res) {
    try {
        const {
            titulo,
            isbn,
            ano_publicacao,
            numero_paginas,
            sinopse
        } = req.body;

        const novoLivro = await livrosModel.criar({
            titulo,
            isbn,
            ano_publicacao,
            numero_paginas,
            sinopse
        });

        return res.status(201).json({
            mensagem: "Livro criado com sucesso",
            id: novoLivro.insertId
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar livro"
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const livro = await livrosModel.buscarPorId(id);

        if (!livro || livro.length === 0) {
            return res.status(404).json({
                error: "Livro não encontrado"
            });
        };

        await livrosModel.editar(id, req.body);

        return res.json({
            mensagem: "Livro editado com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao editar livro"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const livro = await livrosModel.buscarPorId(id);

        if (!livro || livro.length === 0) {
            return res.status(404).json({
                error: "Livro não encontrado"
            });
        };

        await livrosModel.excluir(id);

        return res.json({
            mensagem: "Livro excluído com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao excluir livro"
        });
    };
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir
};
