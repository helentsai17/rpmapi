'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nonin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nonin.init({
    machineId: {
      type: DataTypes.STRING
    },
    heart_rate: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    spo2: {
      type: DataTypes.INTEGER
    },
    time: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Nonin',
    tableName: 'nonins'
  });
  return Nonin;
};