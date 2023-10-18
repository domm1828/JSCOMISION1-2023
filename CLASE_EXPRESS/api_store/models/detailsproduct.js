'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailsProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detailsProduct.init({
    products_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    color: DataTypes.STRING,
    category: DataTypes.STRING,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detailsProduct',
  });
  return detailsProduct;
};