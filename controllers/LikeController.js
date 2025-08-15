// controllers/LikeController.js
const { Like } = require('../models');

class LikeController {
  static async create(req, res) {
    try {
      // Simple validation
      if (!req.body.userId || !req.body.likedUserId) {
        return res.status(400).json({ error: 'userId and likedUserId are required' });
      }

      const newLike = await Like.create(req.body);
      res.status(201).json(newLike);
    } catch (err) {
      res.status(500).json({ error: err.message });
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
