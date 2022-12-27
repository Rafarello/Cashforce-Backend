const Buyers = require("../database/models/Buyers")
const Cnpj = require("../database/models/Cnpj")
const Orders = require("../database/models/Orders");
const Providers = require("../database/models/Providers");

class OrdersService {
  static async getOrdersInfo() {
    const response = await Orders.findAll({
      include: [
        { 
          model: Buyers, 
          required: false, 
          include: { model: Cnpj }
        }, 
        { 
          model: Providers, 
          required: false,
          include: { model: Cnpj }
        },
      ],
    });

    return response;
  }
}

module.exports = OrdersService;
