const { Model, DataTypes } = require("sequelize");
const sequelize = require(".");
const Orders = require("./Orders");
const Cnpj = require("./Cnpj");

class Providers extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here

  }
}

Providers.init({
  name: { type: DataTypes.STRING, field: "name", },
  tradingName: { type: DataTypes.STRING, field: "tradingName", defaultValue: null },
  cashforceTax: { type: DataTypes.STRING, field: "cashforceTax", defaultValue: null },
  responsibleName: { type: DataTypes.STRING, field: "responsibleName", defaultValue: null },
  responsibleEmail: { type: DataTypes.STRING, field: "responsibleEmail", defaultValue: null },
  responsiblePosition: { type: DataTypes.STRING, field: "responsiblePosition", defaultValue: null },
  responsiblePhone: { type: DataTypes.STRING, field: "responsiblePhone", defaultValue: null },
  responsibleMobile: { type: DataTypes.STRING, field: "responsibleMobile", defaultValue: null },
  website: { type: DataTypes.STRING, field: "website", defaultValue: null },
  postalCode: { type: DataTypes.STRING, field: "postalCode", defaultValue: null },
  address: { type: DataTypes.STRING, field: "address", defaultValue: null },
  number: { type: DataTypes.STRING, field: "number", defaultValue: null },
  complement: { type: DataTypes.STRING, field: "complement", defaultValue: null },
  neighborhood: { type: DataTypes.STRING, field: "neighborhood", defaultValue: null },
  city: { type: DataTypes.STRING, field: "city", defaultValue: null },
  state: { type: DataTypes.STRING, field: "state", defaultValue: null },
  bank: { type: DataTypes.STRING, field: "bank", defaultValue: null },
  bankAgency: { type: DataTypes.STRING, field: "bankAgency", defaultValue: null },
  account: { type: DataTypes.STRING, field: "account", defaultValue: null },
  documents: { type: DataTypes.STRING, field: "documents", defaultValue: null },
  phoneNumber: { type: DataTypes.STRING, field: "phoneNumber", defaultValue: null },
  situation: { type: DataTypes.STRING, field: "situation", defaultValue: null },
  situationDate: { type: DataTypes.STRING, field: "situationDate", defaultValue: null },
  createdAt: { type: DataTypes.DATE, field: "createdAt" },
  updatedAt: { type: DataTypes.DATE, field: "updatedAt" },
  cnpjId: { type: DataTypes.INTEGER, field: "cnpjId", defaultValue: null },
  email: { type: DataTypes.STRING, field: "email", defaultValue: null },
}, {
  sequelize: sequelize,
  modelName: 'providers',
  timestamps: false,
  underscored: false
}
)

Providers.Orders = Providers.hasMany(Orders);
Orders.Providers = Orders.belongsTo(Providers);

Providers.Cnpj = Providers.belongsTo(Cnpj);
Cnpj.Providers = Cnpj.hasMany(Providers);

module.exports = Providers;
