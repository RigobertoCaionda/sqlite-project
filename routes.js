const express = require("express");
const UsuariosController = require("./src/controllers/UsuariosController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Servidor está em execução.");
});
routes.get("/usuarios", UsuariosController.index);
routes.post("/usuarios", UsuariosController.store);
routes.put("/usuarios/:id", UsuariosController.update);
routes.delete("/usuarios/:id", UsuariosController.destroy);

module.exports = routes;
