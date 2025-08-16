const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/MatchController");

router.get("/", MatchController.getAll);
router.get("/generate", MatchController.generateMutualMatches);

module.exports = router;
