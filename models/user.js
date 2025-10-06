"use strict";
const { Model } = require("sequelize");
const { randomBytes } = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Like, { foreignKey: "UserId", as: "likesGiven" });
      User.hasMany(models.Like, {
        foreignKey: "LikedUserId",
        as: "likesReceived",
      });
      User.hasMany(models.Match, {
        foreignKey: "User1Id",
        as: "matchesAsUser1",
      });
      User.hasMany(models.Match, {
        foreignKey: "User2Id",
        as: "matchesAsUser2",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.STRING(12),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randomBytes(6).toString("hex"), // 12-char ID
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
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      religion: DataTypes.STRING,
      image: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM("Admin", "Member", "Developer"),
        allowNull: false,
        defaultValue: "Member",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );

  return User;
};
