const { Model, DataTypes } = require("sequelize");
const sequelize = require(".");

class OrderPortions extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here

  }
}

OrderPortions.init({
  nDup: { type: DataTypes.STRING, field: "nDup", },
  dVenc: { type: DataTypes.STRING, field: "dVenc" },
  vDup: { type: DataTypes.STRING, field: "vDup" },
  availableToMarket: { type: DataTypes.TINYINT, field: 'availableToMarket', defaultValue: 1 },
  createdAt: { type: DataTypes.DATE, field: "createdAt" },
  updatedAt: { type: DataTypes.DATE, field: "updatedAt" },
  orderId: { type: DataTypes.INTEGER, field: "orderId", defaultValue: null },
}, {
  sequelize: sequelize,
  modelName: 'orderportions',
  timestamps: false,
  underscored: false
}
)

module.exports = OrderPortions;
