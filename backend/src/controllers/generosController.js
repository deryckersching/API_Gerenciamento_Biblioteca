const generosModel = require("../models/generosModel");

const buscarGeneros = (req, res) => {
    response.json(generosModel);
};

const buscarGenerosPorId = (req, res) => {
    const id = req.params.id;
    const genero = generosModel.find(genero => genero.id == id);

    if(!genero) {
        return res.status(404).json({
            mensagem: "Gênero não encontrado"
        })
    }

    res.json(genero)
};

const criarGenero = (req, res) => {
    const novoGenero = {
        id: generosModel.length + 1,
        nome: req.body.nome
    }

    generosModel.push(novoGenero);
    res.status(201).json(novoGenero);
};

const editarGenero = (req, res) => {
    const id = req.params.id;
    const genero = generosModel.find(genero => genero.id == id);

    if(!genero) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        })
    }

    genero.nome = req.body.nome

    res.json(genero);

};

const excluirGenero = (req, res) => {
    const id = req.params.id;
    const generoIndex = generosModel.findIndex(genero => genero.id == id);

    if(generoIndex == - 1) {
        return res.status(404).json({
            mensagem: "Gênero não encontrado"
        })
    }

    generosModel.splice(generoIndex, 1);

    res.json({
        mensagem: "Livro excluído com sucesso!"
    })
};

module.exports = {
    buscarGeneros,
    buscarGenerosPorId, 
    criarGenero, 
    editarGenero,
    excluirGenero
}