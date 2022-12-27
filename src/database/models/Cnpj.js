const { Model, DataTypes } = require("sequelize");
const sequelize = require(".");

class Cnpj extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here

  }
}

Cnpj.init({
  cnpj: { type: DataTypes.STRING, field: "cnpj", },
  companyType: { type: DataTypes.INTEGER, field: "companyType" },
  createdAt: { type: DataTypes.DATE, field: "createdAt" },
  updatedAt: { type: DataTypes.DATE, field: "updatedAt" },
}, {
  sequelize: sequelize,
  modelName: 'cnpj',
  timestamps: false,
  underscored: false
}
)

module.exports = Cnpj;
