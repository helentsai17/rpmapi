'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Speed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Speed.init({
    machineId: {
      type: DataTypes.STRING
    },
    rpm: {
      type: DataTypes.INTEGER
    }, 
    time: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Speed',
    tableName: 'speeds'
  });
  return Speed;
};