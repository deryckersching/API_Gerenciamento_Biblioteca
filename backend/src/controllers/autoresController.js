
const autoresModel = require("../models/autoresModel");

async function buscarTodos(req, res) {
    try {
        const autores = await autoresModel.buscarTodos();

        return res.json(autores);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar autores"
        });
    };
};

async function buscarPorId(req, res) {
    try {
        const id = req.params.id;
        const autor = await autoresModel.buscarPorId(id);

        if (!autor || autor.length === 0) {
            return res.status(404).json({
                error: "Autor não encontrado"
            });
        };

        return res.json(autor);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar autor"
        });
    };
};

async function criar(req, res) {
    try {
        const {
            nome_completo,
            nacionalidade,
            data_nascimento
        } = req.body;

        const novoAutor = await autoresModel.criar({
            nome_completo,
            nacionalidade,
            data_nascimento
        });

        return res.status(201).json({
            mensagem: "Autor criado com sucesso",
            id: novoAutor.insertId
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar autor"
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const autor = await autoresModel.buscarPorId(id);

        if (!autor || autor.length === 0) {
            return res.status(404).json({
                error: "Autor não encontrado"
            });
        };

        await autoresModel.editar(id, req.body);

        return res.json({
            mensagem: "Autor editado com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao editar autor"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const autor = await autoresModel.buscarPorId(id);

        if (!autor || autor.length === 0) {
            return res.status(404).json({
                error: "Autor não encontrado"
            });
        };

        await autoresModel.excluir(id);

        return res.json({
            mensagem: "Autor excluído com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao excluir autor"
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
