const { Model, DataTypes } = require("sequelize");
const sequelize = require(".");
const Orders = require("./Orders");

class Offers extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here

  }
}

Offers.init({
  tax: { type: DataTypes.STRING, field: "tax", },
  tariff: { type: DataTypes.STRING, field: "tariff" },
  adValorem: { type: DataTypes.STRING, field: "adValorem" },
  float: { type: DataTypes.STRING, field: "float" },
  iof: { type: DataTypes.STRING, field: "iof" },
  expiresIn: { type: DataTypes.DATE, field: "expiresIn" },
  paymentStatusSponsor: { type: DataTypes.TINYINT, field: 'paymentStatusSponsor', defaultValue: 0 },
  paymentStatusProvider: { type: DataTypes.TINYINT, field: 'paymentStatusProvider', defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, field: "createdAt" },
  updatedAt: { type: DataTypes.DATE, field: "updatedAt" },
  orderId: { type: DataTypes.INTEGER, field: "orderId", defaultValue: null },
  sponsorId: { type: DataTypes.INTEGER, field: "sponsorId", defaultValue: null },
}, {
  sequelize: sequelize,
  modelName: 'offers',
  timestamps: false,
  underscored: false
}
)


Orders.Offers = Orders.belongsTo(Offers);
Offers.Orders = Offers.hasOne(Orders);

Orders.Sponsors = Orders.belongsTo(Sponsors);
Sponsors.Orders = Sponsors.hasOne(Orders);

module.exports = Offers;
