const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const alocacao = require('./models/alocacao');

const app = express();

//Config
  //Template Engine
      //const exphbs = h.create({
      //  extname: '.hbs',
      //defaultLayout: "main" });
      app.engine('handlebars', engine());
      app.set('view engine', 'handlebars');
      app.set('views', './views');
      handleb.registerPartials(__dirname + '/views/partials');




//Body Parser Config
      app.use(bodyParser.urlencoded({extended: false}));
      app.use(bodyParser.json());

//Rotas
app.get('/', (req, res) => {
  res.render('formulario');
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
    res.redirect('/');
   // alert("Cadastro efetuado com sucesso!");
  })
  .catch(() => {
    res.send("ERRO ao finalizar cadastro. Por favor, tente novamente mais tarde!")
  });
});

app.listen(3000, () => {console.log("O servidor está no ar!")});