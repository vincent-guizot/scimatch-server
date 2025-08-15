"use strict";

const { v4: uuidv4 } = require("uuid");
const usersData = require("../data/users.json");

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = usersData.map((user) => ({
      id: uuidv4(),
      username: user.username,
      password: user.password,
      fullname: user.fullname,
      role: user.role,
      image: user.image,
      gender: user.gender,
      location: user.location,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
