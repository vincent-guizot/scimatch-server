"use strict";
const { Model } = require("sequelize");
const { randomBytes } = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.User, { foreignKey: "UserId", as: "user" });
      Like.belongsTo(models.User, {
        foreignKey: "LikedUserId",
        as: "likedUser",
      });
    }
  }

  Like.init(
    {
      id: {
        type: DataTypes.STRING(12),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randomBytes(6).toString("hex"),
      },
      UserId: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      LikedUserId: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );

  return Like;
};
