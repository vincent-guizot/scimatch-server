// controllers/MatchController.js
const { Like, Match } = require("../models");

class MatchController {
  // Generate mutual matches
  static async generateMutualMatches(req, res) {
    try {
      // 1. Get all likes
      const likes = await Like.findAll({ raw: true });

      // 2. Map pairs for easy lookup
      const likePairs = likes.map((l) => [l.UserId, l.LikedUserId]);

      const mutualMatches = [];
      const seen = new Set();

      // 3. Loop to find mutual likes
      for (const [userA, userB] of likePairs) {
        const key = [userA, userB].sort().join("-");
        const reverseKey = [userB, userA].sort().join("-");

        // Check if reverse like exists and we haven't added yet
        if (
          !seen.has(key) &&
          likePairs.some(([u, l]) => u === userB && l === userA)
        ) {
          mutualMatches.push({ UserId1: userA, UserId2: userB });
          seen.add(key);
          seen.add(reverseKey);
        }
      }

      // 4. Insert mutual matches into Match table
      const createdMatches = await Match.bulkCreate(mutualMatches, {
        ignoreDuplicates: true, // skip duplicates
      });

      res
        .status(201)
        .json({ message: "Mutual matches generated", data: createdMatches });
    } catch (err) {
      console.error("MatchController.generateMutualMatches error:", err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  // Optional: get all matches
  static async getAll(req, res) {
    try {
      const matches = await Match.findAll();
      res.status(200).json(matches);
    } catch (err) {
      console.error("MatchController.getAll error:", err);
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = MatchController;
