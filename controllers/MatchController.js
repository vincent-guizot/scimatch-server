// controllers/MatchController.js
const { Match } = require('../models');

class MatchController {
  static async create(req, res) {
    try {
      // Simple validation
      if (!req.body.userId1 || !req.body.userId2) {
        return res.status(400).json({ error: 'userId1 and userId2 are required' });
      }

      const newMatch = await Match.create(req.body);
      res.status(201).json(newMatch);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const matches = await Match.findAll();
      res.status(200).json(matches);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = MatchController;
