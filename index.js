const express = require('express');
const bodyParser = require('body-parser');
const alocacao = require('./models/alocacao');

const app = express();

//Body Parser Config
      app.use(bodyParser.urlencoded({extended: false}));
      app.use(bodyParser.json());


      app.use(express.static("./public"));
      

//Rotas
app.get('/', (req, res) => {
  res.render('home');
});

app.post('/cadastro', (req, res) => {
  alocacao.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    cpf: req.body.cpf,
    dataDeNascimento: req.body.data,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    qualificacao: req.body.qualificacao
  })
  .then(() => {
    res.redirect('/home');
  })
  .catch(() => {
    res.send("ERRO ao finalizar cadastro. Por favor, tente novamente mais tarde!")
  });
});
app.listen(3000, () => {console.log("O servidor está no ar!")});