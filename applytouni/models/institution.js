const sequelize = require('../service/dbservice');
const { DataTypes } = require('sequelize');

const institutionModel = sequelize.define(
  'institution',
  {
    institutionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    institutionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'institutionss',
  }
);

module.exports = applicantModel;
