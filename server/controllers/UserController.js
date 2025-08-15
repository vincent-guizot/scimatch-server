// controllers/UserController.js
const { User } = require("../models");

const { v4: uuidv4 } = require("uuid");

class UserController {
  static async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json({
        message: "Users fetched successfully",
        data: users,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({
        message: "User fetched successfully",
        data: user,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  static async create(req, res) {
    try {
      const { username, ...rest } = req.body;

      if (!username) {
        return res.status(400).json({ message: "Username is required" });
      }

      // Check if username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      const id = uuidv4();
      const newUser = await User.create({ username, id, ...rest });
      res.status(201).json({
        message: "User created successfully",
        data: newUser,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const { username } = req.body;
      if (username) {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser && existingUser.id !== user.id) {
          return res.status(409).json({ message: "Username already exists" });
        }
      }

      await user.update(req.body);
      res.status(200).json({
        message: "User updated successfully",
        data: user,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.destroy();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
}

module.exports = UserController;
