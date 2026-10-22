
const emprestimosModel = require("../models/emprestimosModel");

async function buscarTodos(req, res) {
    try {
        const emprestimos = await emprestimosModel.buscarTodos();

        return res.json(emprestimos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar empréstimos"
        });
    };
};

async function buscarPorId(req, res) {
    try {
        const id = req.params.id;
        const emprestimo = await emprestimosModel.buscarPorId(id);

        if (!emprestimo || emprestimo.length === 0) {
            return res.status(404).json({
                error: "Empréstimo não encontrado"
            });
        };

        return res.json(emprestimo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao buscar empréstimo"
        });
    };
};

async function criar(req, res) {
    try {
        const {
            data_emprestimo,
            data_devolucao,
            usuarios_id,
            livros_id
        } = req.body;

        const novoEmprestimo = await emprestimosModel.criar({
            data_emprestimo,
            data_devolucao,
            usuarios_id,
            livros_id
        });

        return res.status(201).json({
            mensagem: "Empréstimo criado com sucesso",
            id: novoEmprestimo.insertId
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao criar empréstimo"
        });
    };
};

async function editar(req, res) {
    try {
        const id = req.params.id;
        const emprestimo = await emprestimosModel.buscarPorId(id);

        if (!emprestimo || emprestimo.length === 0) {
            return res.status(404).json({
                error: "Empréstimo não encontrado"
            });
        };

        await emprestimosModel.editar(id, req.body);

        return res.json({
            mensagem: "Empréstimo editado com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao editar empréstimo"
        });
    };
};

async function excluir(req, res) {
    try {
        const id = req.params.id;
        const emprestimo = await emprestimosModel.buscarPorId(id);

        if (!emprestimo || emprestimo.length === 0) {
            return res.status(404).json({
                error: "Empréstimo não encontrado"
            });
        };

        await emprestimosModel.excluir(id);

        return res.json({
            mensagem: "Empréstimo excluído com sucesso"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro ao excluir empréstimo"
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
