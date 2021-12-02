const db = require('./db')

const alocacao = db.conexao.define('Informacoes', {
  nome: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  senha: {
    type: db.Sequelize.STRING
  },
  cpf: {
    type: db.Sequelize.TEXT
  },
  dataDeNascimento: {
    type: db.Sequelize.DATE
  },
  endereco: {
    type: db.Sequelize.TEXT
  },
  telefone: {
    type: db.Sequelize.STRING
  },
  qualificacao: {
    type: db.Sequelize.STRING
  }
});

//alocacao.sync({force: true})

module.exports = alocacao;