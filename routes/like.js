const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/LikeController");
const authUser = require("../middlewares/authUser");

router.get("/", LikeController.getAll);
router.post("/", authUser, LikeController.create);
router.delete("/delete/all", LikeController.deleteAllLikes);
module.exports = router;
