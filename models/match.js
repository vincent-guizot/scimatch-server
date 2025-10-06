"use strict";
const { Model } = require("sequelize");
const { randomBytes } = require("crypto");

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
        type: DataTypes.STRING(12),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randomBytes(6).toString("hex"),
      },
      User1Id: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      User2Id: {
        type: DataTypes.STRING(12),
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
