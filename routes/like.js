const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/LikeController");
const authUser = require("../middlewares/authUser");

router.get("/", LikeController.getAll);
router.post("/", authUser, LikeController.create);

module.exports = router;
