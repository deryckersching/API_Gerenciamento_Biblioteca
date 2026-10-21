const usuariosModel = require("../models/usuariosModel");
const { gerarHash } = require("../utils/crypto/hash");
const { criptografar, descriptografar } = require("../utils/crypto/criptografia");
 
const buscarUsuarios = async (req, res) => {
    const usuarios = await usuariosModel.buscarTodos();

    res.json(usuarios);
};

const buscarUsuariosPorId = async (req, res) => {
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
        req.body.cpf_iv,
        req.body.cpf_tag,
        req.body.data_aniversario,
        req.body.email,
        req.body.phone_number,
        req.body.senha_hash,
        req.body.senha_salt
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
        req.body.cpf_iv,
        req.body.cpf_tag,
        req.body.data_aniversario,
        req.body.email,
        req.body.phone_number,
        req.body.senha_hash,
        req.body.senha_salt
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
    buscarUsuariosPorId,
    criarUsuario,
    editarUsuario,
    excluirUsuario
};
