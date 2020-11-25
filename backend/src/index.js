const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./middlewares/cors');
const db = require('./db/database');
const app = express();
const port = 4000;

// Controller
const TaskController = require('./controllers/TaskController');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(allowCors);

app.use('/tasks', TaskController);

db.on('error', () => {
  console.log('Não conectou!');
})

db.once('open', () => {
  console.log('Conexão estabelecida!');
})

app.get('/', (req, res) => {
  res.send("Deu bom!");
})

app.listen(port, function() {
  console.log(`O servidor está rodando na porta ${port}`);
});