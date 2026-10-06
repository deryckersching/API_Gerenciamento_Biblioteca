const autoresModel = require("..models/autoresModel");

const buscarAutores = (req, res) => {
    response.json(autoresModel)
};

const buscarAutoresPorId = (req, res) => {
    const id = req.params.id;
    const autor = autoresModel.find(autor => autor.id == id);

    if(!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        })
    }

    res.json(autor)
};

const criarAutor = (req, res) => {
    const novoAutor = {
        id: autoresModel.length + 1,
        nome_completo: req.body.nome_completo,
        nascionalidade: req.body.nascionalidade,
        data_nascimento: req.body.data_nascimento
    }

    autoresModel.push(novoAutor);

    res.status(201).json(novoAutor);
};

const editarAutor = (req, res) => {
    const id = req.params.id;
    const autor = autoresModel.find(autor => autor.id == id);

    if(!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        })
    }

    autor.nome_completo = req.body.nome_completo,
    autor.nascionalidade.body.nascionalidade,
    autor.data_nascimento.body.data_nascimento

    res.json(autor);
};

const excluirAutor = (req, res) => {
    const id = req.params.id;
    const autorIndex = autorModel.findIndex(autor => autor.id == id);

    if(autorIndex == -1) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    autorModel.splice(autorIndex, 1);

    res.json({
        mensagem: "Autor excluído com sucesso!"
    })
};

module.exports = {
    buscarAutores,
    buscarAutoresPorId,
    criarAutor,
    editarAutor,
    excluirAutor
}