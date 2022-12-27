const { Model, DataTypes } = require("sequelize");
const sequelize = require(".");

class Orders extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here

  }
}

Orders.init(    {
  orderNfId: { type: DataTypes.STRING, field: "orderNfId", },
  orderNumber: { type: DataTypes.STRING, field: "orderNumber" },
  orderPath: { type: DataTypes.STRING, field: "orderPath", defaultValue: null },
  orderFileName: { type: DataTypes.STRING, field: 'orderFileName', defaultValue: null },
  orderOriginalName: { type: DataTypes.STRING, field: 'orderOriginalName', defaultValue: null },
  emissionDate: { type: DataTypes.STRING, field: 'emissionDate', defaultValue: null },
  pdfFile: { type: DataTypes.STRING, field: 'pdfFile', defaultValue: null },
  emitedTo: { type: DataTypes.STRING, field: 'emitedTo' },
  nNf: { type: DataTypes.STRING, field: 'nNf', defaultValue: null },
  CTE: { type: DataTypes.STRING, field: 'CTE', defaultValue: null },
  value: { type: DataTypes.STRING, field: 'value', defaultValue: null },
  createdAt: { type: DataTypes.DATE, field: "createdAt" },
  updatedAt: { type: DataTypes.DATE, field: "updatedAt" },
  cnpjId: { type: DataTypes.INTEGER, field: "cnpjId", defaultValue: null },
  userId: { type: DataTypes.INTEGER, field: "userId", defaultValue: null },
  buyerId: { type: DataTypes.INTEGER, field: "buyerId", defaultValue: null },
  providerId: { type: DataTypes.INTEGER, field: "providerId", defaultValue: null },
  orderStatusBuyer: { type: DataTypes.STRING, field: "orderStatusBuyer", defaultValue: '0' },
  orderStatusProvider: { type: DataTypes.STRING, field: "orderStatusProvider", defaultValue: '0' },
  deliveryReceipt: { type: DataTypes.STRING, field: "deliveryReceipt", defaultValue: null },
  cargoPackingList: { type: DataTypes.STRING, field: "cargoPackingList", defaultValue: null },
  deliveryCtrc: { type: DataTypes.STRING, field: "deliveryCtrc", defaultValue: null },
}, {
  sequelize: sequelize,
  modelName: 'orders',
  timestamps: false,
  underscored: false
}
)

module.exports = Orders;
