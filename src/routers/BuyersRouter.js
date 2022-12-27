const express = require('express');
const BuyersController = require('../controllers/BuyersController');

class BuyersRouter {
  constructor() {
    this.router = express.Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post('/test', BuyersController.getBuyersInfo);
  }
}

module.exports = new BuyersRouter().router;
