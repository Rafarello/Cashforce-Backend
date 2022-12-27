const express = require('express');
const OrdersController = require('../controllers/OrdersController');

class OrdersRouter {
  constructor() {
    this.router = express.Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post('/test', OrdersController.getOrdersInfo);
  }
}

module.exports = new OrdersRouter().router;
