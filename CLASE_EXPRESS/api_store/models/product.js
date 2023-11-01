'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description:{
      type:DataTypes.STRING,
      set(value){
        this.setDataValue('description',value.toUpperCase())
      }
    } ,
    brand: DataTypes.STRING,
    ean: DataTypes.STRING,
    photo:{
      type:DataTypes.TEXT,
      get(){
        return this.getDataValue('photo') ? `http://localhost:5000/public/products/${this.getDataValue('photo')}` : '';
      }
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};