const autoresModel = require("../models/autoresModel");

const buscarAutores = async (req, res) => {
    const autores = await autoresModel.buscarTodos();

    res.json(autores);
};

const buscarAutoresPorId = async (req, res) => {
    const id = req.params.id;
    const autor = await autoresModel.buscarPorId(id);

    if (!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    res.json(autor);
};

const criarAutor = async (req, res) => {
    const {
        nome_completo,
        nacionalidade,
        data_nascimento
    } = req.body;

    const novoAutor = await autoresModel.criar(
        nome_completo,
        nacionalidade,
        data_nascimento
    );

    res.status(201).json(novoAutor);
};

const editarAutor = async (req, res) => {
    const id = req.params.id;

    const autor = await autoresModel.buscarPorId(id);

    if (!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    const {
        nome_completo,
        nacionalidade,
        data_nascimento
    } = req.body;

    const autorAtualizado = await autoresModel.editar(
        id,
        nome_completo,
        nacionalidade,
        data_nascimento
    );

    res.json(autorAtualizado);
};

const excluirAutor = async (req, res) => {
    const id = req.params.id;

    const autor = await autoresModel.buscarPorId(id);

    if (!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    await autoresModel.excluir(id);

    res.json({
        mensagem: "Autor excluído com sucesso"
    });
};

module.exports = {
    buscarAutores,
    buscarAutoresPorId,
    criarAutor,
    editarAutor,
    excluirAutor
};