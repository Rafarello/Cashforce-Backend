const httpStatusCode = require("../enums/httpStatusCode");
const OrdersService = require("../services/OrdersService");


class OrdersController {
  static async getOrdersInfo(_req, res, next) {
    try {
      const response = await OrdersService.getOrdersInfo();

      return res.status(httpStatusCode.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrdersController
