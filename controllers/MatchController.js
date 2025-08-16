// controllers/MatchController.js
const { Like, Match, User } = require("../models");

class MatchController {
  // Generate mutual matches
  static async generateMutualMatches(req, res) {
    try {
      const likes = await Like.findAll({ raw: true });

      const likePairs = likes.map((l) => [l.UserId, l.LikedUserId]);
      const mutualMatches = [];
      const seen = new Set();

      for (const [userA, userB] of likePairs) {
        const key = [userA, userB].sort().join("-");
        const reverseKey = [userB, userA].sort().join("-");

        if (
          !seen.has(key) &&
          likePairs.some(([u, l]) => u === userB && l === userA)
        ) {
          mutualMatches.push({ User1Id: userA, User2Id: userB });
          seen.add(key);
          seen.add(reverseKey);
        }
      }

      const createdMatches = await Match.bulkCreate(mutualMatches, {
        ignoreDuplicates: true,
      });

      res
        .status(201)
        .json({ message: "Mutual matches generated", data: createdMatches });
    } catch (err) {
      console.error("MatchController.generateMutualMatches error:", err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  // Get all matches with user info
  static async getAll(req, res) {
    try {
      const matches = await Match.findAll({
        include: [
          {
            model: User,
            as: "user1",
            attributes: ["id", "username", "fullname", "gender"],
          },
          {
            model: User,
            as: "user2",
            attributes: ["id", "username", "fullname", "gender"],
          },
        ],
      });

      res.status(200).json(matches);
    } catch (err) {
      console.error("MatchController.getAll error:", err);
      res.status(500).json({ error: err.message });
    }
  }
  static async deleteAllMatches(req, res) {
    try {
      await Match.destroy({ where: {} });
      res.json({ message: "All matches deleted" });
    } catch (err) {
      console.error("Error deleting matches:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = MatchController;
