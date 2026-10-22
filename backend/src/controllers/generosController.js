
const generosModel = require("../models/generosModel");

async function buscarTodos(req, res) {
    try {
        const generos = await generosModel.buscarTodos();

        return res.json(generos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar gêneros"
        });
    };
};

async function buscarPorId(req, res) {
    try {
        const id = req.params.id;
        const genero = await generosModel.buscarPorId(id);

        if (!genero || genero.length === 0) {
            return res.status(404).json({
                error: "Gênero não encontrado"
            });
        };

        return res.json(genero);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar gênero"
        });
    };
};

async function criar(req, res) {
    try {
        const { nome } = req.body;

        const novoGenero = await generosModel.criar({
            nome
        });

        return res.status(201).json({
            mensagem: "Gênero criado com sucesso",
            id: novoGenero.insertId
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar gênero"
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const genero = await generosModel.buscarPorId(id);

        if (!genero || genero.length === 0) {
            return res.status(404).json({
                error: "Gênero não encontrado"
            });
        };

        await generosModel.editar(id, req.body);

        return res.json({
            mensagem: "Gênero editado com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao editar gênero"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const genero = await generosModel.buscarPorId(id);

        if (!genero || genero.length === 0) {
            return res.status(404).json({
                error: "Gênero não encontrado"
            });
        };

        await generosModel.excluir(id);

        return res.json({
            mensagem: "Gênero excluído com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao excluir gênero"
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
