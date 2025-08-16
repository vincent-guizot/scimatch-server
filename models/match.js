"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.User, { foreignKey: "User1Id", as: "user1" });
      Match.belongsTo(models.User, { foreignKey: "User2Id", as: "user2" });
    }
  }

  Match.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      User1Id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      User2Id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Match",
    }
  );

  return Match;
};
