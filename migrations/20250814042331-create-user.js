"use strict";

const { randomBytes } = require("crypto");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.STRING(12),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randomBytes(6).toString("hex"), // 12-char ID
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: Sequelize.STRING,
      age: Sequelize.INTEGER,
      gender: Sequelize.STRING,
      religion: Sequelize.STRING,
      image: Sequelize.STRING,
      role: {
        type: Sequelize.ENUM("Admin", "Member", "Developer"),
        allowNull: false,
        defaultValue: "Member",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
