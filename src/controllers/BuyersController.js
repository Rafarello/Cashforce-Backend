const httpStatusCode = require("../enums/httpStatusCode");
const tableStatusCode = require("../enums/tableStatusCode");
const BuyersService = require("../services/BuyersService");


class BuyersController {
  static async getBuyersInfo(_req, res) {
    const response = await BuyersService.getBuyersInfo();

    console.log(tableStatusCode[8])
    return res.status(httpStatusCode.OK).json(response);
  }
}

module.exports = BuyersController
