const emprestimosModel = require("../models/emprestimosModel");

const buscarEmprestimos = (req, res) => {
    return(emprestimosModel)
};

const buscarEmprestimosPorId = (req, res) => {
    const id = req.params.id;
    const emprestimo = emprestimosModel.find(emprestimo => emprestimo.id == id);

    if(!emprestimo) {
        return res.status(404).json({
            mensagem: "Empréstimo não encontrado"
        })
    }

    res.json(emprestimo)
};

const criarEmprestimo = (req, res) => {
    const novoEmprestimo = {
        id: emprestimosModel.length + 1,
        data_emprestimo: req.body.data_emprestimo,
        data_devolucao: req.body.data_devolucao,
        usuarios_id: req.body.usuarios_id,
        livros_id: req.body.livros_id
    }

    emprestimosModel.push(novoEmprestimo)
    res.status(201).json(novoEmprestimo);
};

const editarEmprestimo = (req, res) => {
    const id = req.params.id;
    const emprestimo = emprestimosModel.find(emprestimo => emprestimo.id == id);

    if(!emprestimo) {
        return res.status(404).json({
            mensagem: "Empréstimo não encontrado"
        })
    }

    emprestimo.data_emprestimo = req.body.data_emprestimo,
    emprestimo.data_devolucao = req.body.data_devolucao,
    emprestimo.usuarios_id = req.body.usuarios_id,
    emprestimo.livros_id = req.body.livros_id

    res.json(emprestimo);
};

const excluirUsuario = (req, res) => {
    const id = req.params.id;
    const emprestimoIndex = emprestimosModel.findIndex(emprestimo => emprestimo_id == id);
}