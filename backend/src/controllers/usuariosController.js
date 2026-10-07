const usuariosModel = require("../models/usuariosModel");

const buscarUsuarios = async (req, res) => {
    const usuarios = await usuariosModel.buscarTodos();

    res.json(usuarios);
};

const buscarUsuarioPorId = async (req, res) => {
    const id = req.params.id;
    const usuario = await usuariosModel.buscarPorId(id);

    if(!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    res.json(usuario);
};

const criarUsuario = async (req, res) => {
    const novoUsuario = await usuariosModel.criar(
        req.body.nome_completo,
        req.body.cpf,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento
    );

    res.status(201).json(novoUsuario);
};

const editarUsuario = async (req, res) => {
    const id = req.params.id;

    const usuario = await usuariosModel.buscarPorId(id);

    if(!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    const usuarioAtualizado = await usuariosModel.editar(
        id,
        req.body.nome_completo,
        req.body.cpf,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento
    );

    res.json(usuarioAtualizado);
};

const excluirUsuario = async (req, res) => {
    const id = req.params.id;

    const usuario = await usuariosModel.buscarPorId(id);

    if(!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    await usuariosModel.excluir(id);

    res.json({
        mensagem: "Usuário excluído com sucesso!"
    })
};

module.exports = {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    editarUsuario,
    excluirUsuario
};
