'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercise.init({
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    machineId: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    survey_data: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'Exercise',
    tableName:'exercises'
  });
  return Exercise;
};