// controllers/LikeController.js
const { Like } = require("../models");

class LikeController {
  static async create(req, res) {
    try {
      const userId = +req.user.id; // from middleware
      const likedUserIds = req.body.matches; // matches array from frontend

      if (!likedUserIds || likedUserIds.length === 0) {
        return res.status(400).json({ message: "No matches provided" });
      }

      // prepare bulk data
      const bulkData = likedUserIds.map((likedUserId) => ({
        UserId: userId,
        LikedUserId: likedUserId,
      }));

      const likes = await Like.bulkCreate(bulkData);
      res
        .status(201)
        .json({ message: "Matches saved successfully", data: likes });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const likes = await Like.findAll();
      res.status(200).json(likes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = LikeController;
