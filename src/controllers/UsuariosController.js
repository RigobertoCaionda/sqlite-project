const Usuario = require("../models/Usuario");

module.exports = {

  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao consultar usuários." });
    }
  },

  async store(req, res) {
    const { nome, idade } = req.body;
    if (!nome || !idade) {
      return res.status(400).json({ error: "Nome e idade são obrigatórios." });
    }

    try {
      const usuario = await Usuario.create({ nome, idade });
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao inserir usuário." });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, idade } = req.body;
    if (!nome || !idade) {
      return res.status(400).json({ error: "Nome e idade são obrigatórios." });
    }

    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      usuario.nome = nome;
      usuario.idade = idade;
      await usuario.save();

      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      await usuario.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao remover usuário." });
    }
  },
};
