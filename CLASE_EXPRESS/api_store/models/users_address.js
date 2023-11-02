'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_address.init({
    users_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    code_postal: DataTypes.STRING,
    street: DataTypes.STRING,
    floor: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_address',    
    paranoid:true,
  });
 
  return users_address;
};