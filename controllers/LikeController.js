// controllers/LikeController.js
const { Like } = require("../models");

class LikeController {
  static async create(req, res) {
    try {
      const userId = String(req.userId); // ensure it's a string
      const likedUserIds = req.body.matches.map((id) => String(id)); // convert all to string

      console.log(userId, likedUserIds);
      if (!likedUserIds || likedUserIds.length === 0) {
        return res.status(400).json({ message: "No matches provided" });
      }

      const bulkData = likedUserIds.map((likedUserId) => ({
        UserId: userId,
        LikedUserId: likedUserId,
      }));

      const likes = await Like.bulkCreate(bulkData, { ignoreDuplicates: true });
      res
        .status(201)
        .json({ message: "Matches saved successfully", data: likes });
    } catch (err) {
      console.error("LikeController.create error:", err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const likes = await Like.findAll();
      res.status(200).json(likes);
    } catch (err) {
      console.error("LikeController.getAll error:", err);
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = LikeController;
