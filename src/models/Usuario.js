const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Usuario = sequelize.define("Usuario", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
});

// Sincronize o modelo com o banco de dados
(async () => {
  await sequelize.sync();
})();

module.exports = Usuario;
