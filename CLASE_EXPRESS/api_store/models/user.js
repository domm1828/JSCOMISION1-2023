'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    dni: DataTypes.INTEGER,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName:{
      type:new DataTypes.VIRTUAL(DataTypes.STRING,['name','last_name']),
      get(){
        return `${this.name} ${this.last_name}`
      }
    }
  }, {
    sequelize,
    modelName: 'user',
    paranoid:true,
  });
 
  return user;
};