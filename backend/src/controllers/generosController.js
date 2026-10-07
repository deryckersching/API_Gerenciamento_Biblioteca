const generosModel = require("../models/generosModel");

const buscarGeneros = async (req, res) => {
    const generos = await generosModel.buscarTodos();

    res.json(generos);
};

const buscarGenerosPorId = async (req, res) => {
    const id = req.params.id;
    const genero = await generosModel.buscarPorId(id);

    if(!genero) {
        return res.status(404).json({
            mensagem: "Gênero não encontrado"
        })
    }

    res.json(genero);
};

const criarGenero = async (req, res) => {
    const novoGenero = await generosModel.criar(
        req.body.nome
    );

    res.status(201).json(novoGenero);
};

const editarGenero = async (req, res) => {
    const id = req.params.id;

    const genero = await generosModel.buscarPorId(id);

    if(!genero) {
        return res.status(404).json({
            mensagem: "Gênero não encontrado"
        })
    }

    const generoAtualizado = await generosModel.editar(
        id,
        req.body.nome
    );

    res.json(generoAtualizado);
};

const excluirGenero = async (req, res) => {
    const id = req.params.id;

    const genero = await generosModel.buscarPorId(id);

    if(!genero) {
        return res.status(404).json({
            mensagem: "Gênero não encontrado"
        })
    }

    await generosModel.excluir(id);

    res.json({
        mensagem: "Gênero excluído com sucesso!"
    })
};

module.exports = {
    buscarGeneros,
    buscarGenerosPorId,
    criarGenero,
    editarGenero,
    excluirGenero
};