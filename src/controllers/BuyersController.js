const httpStatusCode = require("../enums/httpStatusCode");
const BuyersService = require("../services/BuyersService");


class BuyersController {
  static async getBuyersInfo(_req, res, next) {
    try {
      const response = await BuyersService.getBuyersInfo();

      return res.status(httpStatusCode.OK).json(response);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = BuyersController
