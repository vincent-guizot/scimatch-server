"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Likes given by this user
      User.hasMany(models.Like, { foreignKey: "UserId", as: "likesGiven" });

      // Likes received by this user
      User.hasMany(models.Like, {
        foreignKey: "LikedUserId",
        as: "likesReceived",
      });

      // Matches where this user is user1
      User.hasMany(models.Match, {
        foreignKey: "User1Id",
        as: "matchesAsUser1",
      });

      // Matches where this user is user2
      User.hasMany(models.Match, {
        foreignKey: "User2Id",
        as: "matchesAsUser2",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: DataTypes.STRING,
      image: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM("Admin", "Member", "Developer"),
        allowNull: false,
        defaultValue: "Member",
      },
      location: DataTypes.STRING,
      fullname: DataTypes.STRING,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
