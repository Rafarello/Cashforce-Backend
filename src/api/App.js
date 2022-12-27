const express = require('express');
const cors = require('cors');
const { errorMiddleware } = require('./middlewares/error/errorMiddleware');

// App feito de acordo com o que foi feito no Projeto Trybe Futebol Clube - Rafael
// Única mudança foi construir ele em Javascript e não em Typescript

class App {
  constructor() {
    this.app = express();
    this.config();
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  // Função config serve para determinar os controles de acessos autorizados para nosso projeto,
  // inicialmente com os mesmos utilizados no TFC

  config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());

    this.app.get('/', (_request, response) => {
      response.send();
    });
  }

  addRouter(router) {
    this.app.use(router);
  }

  start(PORT) {
    this.app.use(errorMiddleware)
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }
}

module.exports = App;
