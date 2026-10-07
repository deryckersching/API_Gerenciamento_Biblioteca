const emprestimosModel = require("../models/emprestimosModel");

const buscarEmprestimos = async (req, res) => {
    const emprestimos = await emprestimosModel.buscarTodos();

    res.json(emprestimos);
};

const buscarEmprestimosPorId = async (req, res) => {
    const id = req.params.id;
    const emprestimo = await emprestimosModel.buscarPorId(id);

    if(!emprestimo) {
        return res.status(404).json({
            mensagem: "Empréstimo não encontrado"
        })
    }

    res.json(emprestimo);
};

const criarEmprestimo = async (req, res) => {
    const novoEmprestimo = await emprestimosModel.criar(
        req.body.data_emprestimo,
        req.body.data_devolucao,
        req.body.usuarios_id,
        req.body.livros_id
    );

    res.status(201).json(novoEmprestimo);
};

const editarEmprestimo = async (req, res) => {
    const id = req.params.id;

    const emprestimo = await emprestimosModel.buscarPorId(id);

    if(!emprestimo) {
        return res.status(404).json({
            mensagem: "Empréstimo não encontrado"
        })
    }

    const emprestimoAtualizado = await emprestimosModel.editar(
        id,
        req.body.data_emprestimo,
        req.body.data_devolucao,
        req.body.usuarios_id,
        req.body.livros_id
    );

    res.json(emprestimoAtualizado);
};

const excluirEmprestimo = async (req, res) => {
    const id = req.params.id;

    const emprestimo = await emprestimosModel.buscarPorId(id);

    if(!emprestimo) {
        return res.status(404).json({
            mensagem: "Empréstimo não encontrado"
        })
    }

    await emprestimosModel.excluir(id);

    res.json({
        mensagem: "Empréstimo excluído com sucesso!"
    })
};

module.exports = {
    buscarEmprestimos,
    buscarEmprestimoPorId,
    criarEmprestimo,
    editarEmprestimo,
    excluirEmprestimo
}