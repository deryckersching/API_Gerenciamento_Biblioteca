const usuariosModel = require("../models/usuariosModel");

const buscarUsuarios = (req, res) => {
    response.json(usuariosModel);
};

const buscarUsuariosPorId = (req, res) => {
    const id = req.params.id;
    const usuario = usuariosModel.find(usuario => usuario.id == id);

    if(!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    res.json(usuario)
};

const criarUsuario = (req, res) => {
    const novoUsuario = {
        id: usuariosModel.length + 1,
        nome_completo: req.body.nome_completo,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        data_nascimento: req.body.data_nascimento
    }

    usuariosModel.push(novoUsuario);
    res.status(201).json(novoUsuario);
};

const editarUsuario = (req, res) => {
    const id = req.params.id;
    const usuario = usuariosModel.find(usuario => usuario.id == id);

    if(!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    usuario.nome_completo = req.body.nome_completo,
    usuario.cpf = req.body.cpf,
    usuario.email = req.body.email,
    usuario.telefone = req.body.telefone,
    usuario.data_nascimento = req.body.data_nascimento

    res.json(usuario);
};

const excluirUsuario = (req, res) => {
    const id = req.params.id;
    const usuarioIndex = usuariosModel.findIndex(usuario => usuario.id == id);

    if(usuarioIndex == -1) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    usuariosModel.splice(usuarioIndex, 1)

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
}