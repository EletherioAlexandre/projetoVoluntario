//Conexao ao Banco de Dados
const Sequelize = require('sequelize');
const conexao = new Sequelize('alocacao', 'root', 'Br7cavalaria!', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  conexao: conexao
}
