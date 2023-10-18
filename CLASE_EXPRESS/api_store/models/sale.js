'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sale.init({
    users_address_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    sales_date: DataTypes.DATE,
    sales_hours: DataTypes.TIME,
    vat: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    subTotal: DataTypes.FLOAT,
    payment: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sale',
  });
  return sale;
};