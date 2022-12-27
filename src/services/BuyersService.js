const Buyers = require("../database/models/Buyers")
const Cnpj = require("../database/models/Cnpj")
const Orders = require("../database/models/Orders")

class BuyersService {
  static async getBuyersInfo() {
    const response = await Buyers.findAll({
      include: [
        { model: Orders, required: false }, 
        { model: Cnpj, required: false },
      ],
    });

    return response;
  }
}

module.exports = BuyersService
