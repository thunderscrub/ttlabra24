const sequelize = require('../service/dbservice');
const { DataTypes } = require('sequelize');

const responseModel = sequelize.define(
  'applicant_response',
  {
    applicantId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    applicantResponseId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    programApplicationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    response: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: 'applicant_responses',
  }
);

module.exports = responseModel;
