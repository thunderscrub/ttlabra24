const sequelize = require('../service/dbservice');
const { DataTypes } = require('sequelize');

const applicantModel = sequelize.define(
  'applicant',
  {
    applicantId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'applicants',
  }
);

module.exports = applicantModel;
