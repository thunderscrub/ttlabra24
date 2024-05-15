const sequelize = require('../service/dbservice');
const { DataTypes } = require('sequelize');

const formModel = sequelize.define(
  'forms',
  {
    formId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    form: {
      type: DataTypes.JSON,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'forms',
  }
);

module.exports = formModel;
